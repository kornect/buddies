import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SkeletonFilterPanelComponent } from './components/skeleton-filter-panel/skeleton-filter-panel.component';
import { SkeletonGraphComponent } from './components/skeleton-graph/skeleton-graph.component';
import { SkeletonGridComponent } from './components/skeleton-grid/skeleton-grid.component';
import { SkeletonInlineComponent } from './components/skeleton-inline/skeleton-inline.component';
import { SkeletonListComponent } from './components/skeleton-list/skeleton-list.component';
import { SkeletonPageComponent } from './components/skeleton-page/skeleton-page.component';
import { SkeletonTableComponent } from './components/skeleton-table/skeleton-table.component';
import { SkeletonDirective } from './directives/skeleton.directive';


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