import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SkeletonFilterPanelComponent } from './skeleton-filter-panel/skeleton-filter-panel.component';
import { SkeletonGraphComponent } from './skeleton-graph/skeleton-graph.component';
import { SkeletonGridComponent } from './skeleton-grid/skeleton-grid.component';
import { SkeletonInlineComponent } from './skeleton-inline/skeleton-inline.component';
import { SkeletonListComponent } from './skeleton-list/skeleton-list.component';
import { SkeletonPageComponent } from './skeleton-page/skeleton-page.component';
import { SkeletonTableComponent } from './skeleton-table/skeleton-table.component';
import { SkeletonDirective } from './skeleton.directive';


@NgModule({
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
  exports: [
    SkeletonDirective,
    SkeletonPageComponent,
    SkeletonTableComponent,
    SkeletonGridComponent,
    SkeletonFilterPanelComponent,
    SkeletonListComponent,
    SkeletonInlineComponent,
    SkeletonGraphComponent,
  ],
  imports: [CommonModule],
})
export class UiSkeletonModule {}
