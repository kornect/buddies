import { NO_ERRORS_SCHEMA } from '@angular/core';

import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { SkeletonListComponent } from './skeleton-list.component';

describe('SkeletonListComponent', () => {
  const createComponent = createComponentFactory({
    component: SkeletonListComponent,
    declarations: [],
    schemas: [NO_ERRORS_SCHEMA],
    providers: [],
    shallow: true,
    mocks: [],
    detectChanges: false, // Defaults to true
  });

  let spectator: Spectator<SkeletonListComponent>;

  beforeEach(() => {
    spectator = createComponent();
  });

  it('can load instance', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('applies animation when set to true', () => {
    spectator.component.animate = true;
    spectator.component.ngAfterViewInit();

    const animate = spectator.query('.animate-strike');
    expect(animate).toBeTruthy();
  });

  it('removes animation when animate set to false', () => {
    spectator.component.animate = false;
    spectator.component.ngAfterViewInit();

    const animate = spectator.query('.animate-strike');
    expect(animate).toBeFalsy();
  });
});
