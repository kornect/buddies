import { AfterViewInit, Component, ElementRef, EventEmitter, NgZone, OnInit, Output, ViewChild } from '@angular/core';
import { BaseFormComponent } from '@/app/common/forms';
import { catchError, finalize, map, Observable, of, tap } from 'rxjs';
import { GoogleMap } from '@angular/google-maps';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngxs/store';
import { ConfigService } from '@/app/common/config';
import { UpdateLocationAction } from '@/app/store/state';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update-location',
  templateUrl: './update-location.component.html',
  styleUrls: ['./update-location.component.scss']
})
export class UpdateLocationComponent extends BaseFormComponent implements OnInit, AfterViewInit {
  mapsApiLoaded!: Observable<boolean>;
  @Output() onSaved = new EventEmitter();

  @ViewChild('search')
  public searchElementRef!: ElementRef;
  @ViewChild(GoogleMap)
  public map!: GoogleMap;
  zoom = 12;
  center!: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: false,
    disableDefaultUI: true,
    fullscreenControl: true,
    disableDoubleClickZoom: true,
    mapTypeId: 'roadmap'
    // maxZoom:this.maxZoom,
    // minZoom:this.minZoom,
  };
  latitude!: any;
  longitude!: any;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private message: NzMessageService,
    private httpClient: HttpClient,
    private ngZone: NgZone,
    private store: Store,
    private configService: ConfigService,
    private location: Location
  ) {
    super();
    this.form = this.formBuilder.group({
      search: [null],
      area: [null, [Validators.required]],
      city: [null, [Validators.required]],
      province: [null, [Validators.required]],
      country: [null, [Validators.required]],
      latitude: [null, [Validators.required]],
      longitude: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
    });
  }

  Save(formValues: any): Observable<any> {
    return this.store.dispatch(new UpdateLocationAction(formValues)).pipe(
      tap(() => {
        this.message.success('Location updated successfully');
        this.location.back();
      })
    );
  }

  ngAfterViewInit(): void {
    this.mapsApiLoaded = this.httpClient
      .jsonp(
        'https://maps.googleapis.com/maps/api/js?key=' + this.configService.getGoogleMapsApiKey() + '&libraries=places',
        'callback'
      )
      .pipe(
        finalize(() => setTimeout(() => this.setupMapsSearch(), 300)),
        map(() => true),
        catchError(() => of(false))
      );
  }

  setupMapsSearch() {
    // Binding autocomplete to search input control
    let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
      componentRestrictions: {
        country: ['za']
      },
      fields: ['address_components', 'geometry', 'formatted_address']
    });

    autocomplete.addListener('place_changed', () => {
      this.ngZone.run(() => {
        //get the place result
        let place: google.maps.places.PlaceResult = autocomplete.getPlace();

        //verify result
        if (place.geometry === undefined || place.geometry === null) {
          return;
        }

        //set latitude, longitude and zoom
        this.latitude = place.geometry.location?.lat();
        this.longitude = place.geometry.location?.lng();
        this.center = {
          lat: this.latitude,
          lng: this.longitude
        };

        this.setFormValues(place);
      });
    });
  }

  setFormValues(place: google.maps.places.PlaceResult) {
    const addressComponents = place.address_components || [];
    this.form.get('search')?.setValue(place.formatted_address);
    this.form.get('area')?.setValue(this.extractFromAddress(addressComponents, 'locality'));
    this.form.get('city')?.setValue(this.extractFromAddress(addressComponents, 'administrative_area_level_2'));
    this.form.get('province')?.setValue(this.extractFromAddress(addressComponents, 'administrative_area_level_1'));
    this.form.get('country')?.setValue(this.extractFromAddress(addressComponents, 'country'));
    this.form.get('latitude')?.setValue(place?.geometry?.location?.lat());
    this.form.get('longitude')?.setValue(place?.geometry?.location?.lng());
    this.form.updateValueAndValidity();
  }

  /**
   * Get the value for a given key in address_components
   *
   * @param {Array} components address_components returned from Google maps autocomplete
   * @param type key for desired address component
   * @returns {String} value, if found, for given type (key)
   */
  extractFromAddress(components: google.maps.GeocoderAddressComponent[], type: string) {
    return (
      components
        .filter((component) => component.types.indexOf(type) === 0)
        .map((item) => item.long_name)
        .pop() || null
    );
  }

  Cancel() {
    this.location.back();
  }
}
