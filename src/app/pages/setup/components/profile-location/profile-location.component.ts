import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, EventEmitter, NgZone, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { GoogleMap } from '@angular/google-maps';

import { environment } from 'env';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable, catchError, finalize, map, of, tap } from 'rxjs';
import { BaseFormComponent } from 'shared/ui/ui-forms';

import { UserProfileService } from 'domain/services/profile';


@Component({
  selector: 'app-profile-location',
  templateUrl: './profile-location.component.html',
  styleUrls: ['./profile-location.component.scss'],
})
export class ProfileLocationComponent extends BaseFormComponent implements OnInit, AfterViewInit {
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
    mapTypeId: 'roadmap',
    // maxZoom:this.maxZoom,
    // minZoom:this.minZoom,
  };
  latitude!: any;
  longitude!: any;

  constructor(
    private formBuilder: FormBuilder,
    private message: NzMessageService,
    private userProfileService: UserProfileService,
    private httpClient: HttpClient,
    private ngZone: NgZone
  ) {
    super();
    this.form = this.formBuilder.group({
      search: [null],
      area: [null, [Validators.required]],
      city: [null, [Validators.required]],
      province: [null, [Validators.required]],
      country: [null, [Validators.required]],
      latitude: [null, [Validators.required]],
      longitude: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
  }

  Save(formValues: any): Observable<any> {
    return this.userProfileService.updateLocation(formValues).pipe(
      tap(() => {
        this.onSaved.emit();
      })
    );
  }

  ngAfterViewInit(): void {
    this.mapsApiLoaded = this.httpClient
      .jsonp(
        'https://maps.googleapis.com/maps/api/js?key=' + environment.googleMapsApi + '&libraries=places',
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
        country: ['za'],
      },
      fields: ['address_components', 'geometry', 'formatted_address'],
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
          lng: this.longitude,
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

    console.log(this.form.value);
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
}
