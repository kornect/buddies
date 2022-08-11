import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, NO_ERRORS_SCHEMA } from '@angular/core';

import { Spectator, byText, createComponentFactory } from '@ngneat/spectator/jest';

import { SkeletonFilterPanelComponent } from '../components/skeleton-filter-panel/skeleton-filter-panel.component';
import { SkeletonGraphComponent } from '../components/skeleton-graph/skeleton-graph.component';
import { SkeletonGridComponent } from '../components/skeleton-grid/skeleton-grid.component';
import { SkeletonInlineComponent } from '../components/skeleton-inline/skeleton-inline.component';
import { SkeletonListComponent } from '../components/skeleton-list/skeleton-list.component';
import { SkeletonPageComponent } from '../components/skeleton-page/skeleton-page.component';
import { SkeletonTableComponent } from '../components/skeleton-table/skeleton-table.component';
import { SkeletonDirective, SkeletonType } from './skeleton.directive';

@Component({
  template: `
    <div>
      <h1>Without Directive</h1>
      <ng-container *nexwebSkeleton="isLoading; type: type; repeat: repeat; animate: animate">
        <h1 class="greetings">Hello World!</h1>
      </ng-container>
    </div>
  `,
})
class TestComponent {
  public isLoading = false;
  public type = 'list' as SkeletonType;
  public repeat = 1;
  public animate = false;
}

describe('SkeletonDirective', () => {
  const createComponent = createComponentFactory({
    component: TestComponent,
    declarations: [
      SkeletonDirective,
      SkeletonPageComponent,
      SkeletonTableComponent,
      SkeletonGridComponent,
      SkeletonFilterPanelComponent,
      SkeletonListComponent,
      SkeletonInlineComponent,
      SkeletonGraphComponent,
    ],
    schemas: [NO_ERRORS_SCHEMA],
    providers: [ChangeDetectorRef],
    shallow: false,
    mocks: [],
    entryComponents: [
      SkeletonPageComponent,
      SkeletonTableComponent,
      SkeletonGridComponent,
      SkeletonFilterPanelComponent,
      SkeletonListComponent,
      SkeletonInlineComponent,
      SkeletonGraphComponent,
    ],
    imports: [CommonModule],
    detectChanges: false, // Defaults to true
  });

  let spectator: Spectator<TestComponent>;

  beforeEach(() => {
    spectator = createComponent();
  });

  it('component should be created', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('greetings should be shown by default', () => {
    spectator.detectComponentChanges();
    const greetings = spectator.query(byText('Hello World!'));
    expect(greetings).toBeTruthy();
  });

  describe('shows the filter-panel skeleton properly', () => {
    const type = 'filter-panel';
    const selector = 'nexweb-skeleton-filter-panel';

    showsTheExpectedSkeleton(type, selector);
    showCorrectNumberOfSkeletons(type, selector, 3, 1);
    animatesTheSkeletons(type, true);
    animatesTheSkeletons(type, false);
  });

  describe('shows the graph skeleton properly', () => {
    const type = 'graph';
    const selector = 'nexweb-skeleton-graph';

    showsTheExpectedSkeleton(type, selector);
    showCorrectNumberOfSkeletons(type, selector, 3, 1);
    animatesTheSkeletons(type, true);
    animatesTheSkeletons(type, false);
  });

  describe('shows the grid skeleton properly', () => {
    const type = 'grid';
    const selector = 'nexweb-skeleton-grid';

    showsTheExpectedSkeleton(type, selector);
    showCorrectNumberOfSkeletons(type, selector, 3, 3);
    animatesTheSkeletons(type, true);
    animatesTheSkeletons(type, false);
  });

  describe('shows the list skeleton properly', () => {
    const type = 'list';
    const selector = 'nexweb-skeleton-list';

    showsTheExpectedSkeleton(type, selector);
    showCorrectNumberOfSkeletons(type, selector, 3, 3);
    animatesTheSkeletons(type, true);
    animatesTheSkeletons(type, false);
  });

  describe('shows the inline skeleton properly', () => {
    const type = 'inline';
    const selector = 'nexweb-skeleton-inline';

    showsTheExpectedSkeleton(type, selector);
    showCorrectNumberOfSkeletons(type, selector, 3, 1);
    animatesTheSkeletons(type, true);
    animatesTheSkeletons(type, false);
  });

  describe('shows the page skeleton properly', () => {
    const type = 'page';
    const selector = 'nexweb-skeleton-page';

    showsTheExpectedSkeleton(type, selector);
    showCorrectNumberOfSkeletons(type, selector, 3, 1);
    animatesTheSkeletons(type, true);
    animatesTheSkeletons(type, false);
  });

  describe('shows the table skeleton properly', () => {
    const type = 'table';
    const selector = 'nexweb-skeleton-table';

    showsTheExpectedSkeleton(type, selector);
    showCorrectNumberOfSkeletons(type, selector, 3, 3);
    animatesTheSkeletons(type, true);
    animatesTheSkeletons(type, false);
  });

  /**
   * tests basic skeleton to see if its shown
   * @param type
   * @param skeletonSelector
   */
  function showsTheExpectedSkeleton(type: SkeletonType, skeletonSelector: string) {
    it(`should show ${type} skeleton`, () => {
      spectator.component.type = type;
      spectator.component.isLoading = true;
      spectator.detectComponentChanges();

      expect(spectator.query(skeletonSelector)).toBeTruthy();
      expect(spectator.query(byText('Hello World!'))).toBeFalsy();
      expect(spectator.query('.animate-strike')).toBeFalsy();
      expect(spectator.queryAll(skeletonSelector)?.length).toEqual(1);
    });
  }

  /**
   * Checks whether the correct number of skeletons are rendered, some skeletons should not be repeated
   * @param type
   * @param skeletonSelector
   * @param repeat
   * @param expected
   */
  function showCorrectNumberOfSkeletons(
    type: SkeletonType,
    skeletonSelector: string,
    repeat: number,
    expected: number
  ) {
    it(`should show ${expected} ${type} skeletons`, () => {
      spectator.component.type = type;
      spectator.component.repeat = repeat;
      spectator.component.isLoading = true;
      spectator.detectComponentChanges();

      expect(spectator.query('.animate-strike')).toBeFalsy();
      expect(spectator.queryAll(skeletonSelector)?.length).toEqual(expected);
    });
  }

  /**
   * Checks whether the animation class is applied or not based on the animate property
   * @param type
   * @param animates
   */
  function animatesTheSkeletons(type: SkeletonType, animates: boolean) {
    it(`should ${animates ? 'animate' : 'not animate'} ${type} skeleton`, () => {
      spectator.component.type = type;
      spectator.component.animate = animates;
      spectator.component.isLoading = true;
      spectator.detectComponentChanges();

      if (animates === true) {
        expect(spectator.query('.animate-strike')).toBeTruthy();
      } else {
        expect(spectator.query('.animate-strike')).toBeFalsy();
      }
    });
  }
});
