import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Directive, Input, OnChanges, SimpleChanges, TemplateRef, Type, ViewContainerRef } from '@angular/core';



import { SkeletonBaseComponent } from '../components/skeleton-base.component';
import { SkeletonFilterPanelComponent } from '../components/skeleton-filter-panel/skeleton-filter-panel.component';
import { SkeletonGraphComponent } from '../components/skeleton-graph/skeleton-graph.component';
import { SkeletonGridComponent } from '../components/skeleton-grid/skeleton-grid.component';
import { SkeletonInlineComponent } from '../components/skeleton-inline/skeleton-inline.component';
import { SkeletonListComponent } from '../components/skeleton-list/skeleton-list.component';
import { SkeletonPageComponent } from '../components/skeleton-page/skeleton-page.component';
import { SkeletonTableComponent } from '../components/skeleton-table/skeleton-table.component';


export type SkeletonType = 'table' | 'list' | 'filter-panel' | 'grid' | 'inline' | 'page' | 'graph';

@Directive({
  selector: '[uiSkeleton]',
})
export class SkeletonDirective implements OnChanges {
  @Input('uiSkeleton') isLoading = false;
  @Input('uiSkeletonType') type!: SkeletonType;
  @Input('uiSkeletonRepeat') repeat = 1;
  @Input('uiSkeletonAnimate') animate = false;

  constructor(
    private tpl: TemplateRef<never>,
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    this.type = 'list';
  }

  ngOnChanges(changes: SimpleChanges) {
    const isLoading = changes['isLoading'];

    if (isLoading) {
      this.viewContainerRef.clear();

      if (isLoading.currentValue) {
        const repeat = this.canRepeat(this.type) ? this.repeat : 1;

        Array.from({ length: repeat }).forEach(() => {
          const ref = this.getComponent(this.type);

          Object.assign(ref.instance, {
            animate: this.animate,
          });
        });
      } else {
        this.viewContainerRef.createEmbeddedView(this.tpl);
      }
    }
  }

  private getComponent(type: SkeletonType): ComponentRef<SkeletonBaseComponent> {
    switch (type) {
      case 'graph':
        return this.viewContainerRef.createComponent(this.getFactory(SkeletonGraphComponent));
      case 'inline':
        return this.viewContainerRef.createComponent(this.getFactory(SkeletonInlineComponent));
      case 'grid':
        return this.viewContainerRef.createComponent(this.getFactory(SkeletonGridComponent));
      case 'filter-panel':
        return this.viewContainerRef.createComponent(this.getFactory(SkeletonFilterPanelComponent));
      case 'table':
        return this.viewContainerRef.createComponent(this.getFactory(SkeletonTableComponent));
      case 'page':
        return this.viewContainerRef.createComponent(this.getFactory(SkeletonPageComponent));
      case 'list':
      default:
        return this.viewContainerRef.createComponent(this.getFactory(SkeletonListComponent));
    }
  }

  private getFactory<T>(type: Type<T>): ComponentFactory<T> {
    return this.componentFactoryResolver.resolveComponentFactory<T>(type);
  }

  private canRepeat(skeletonType: SkeletonType): boolean {
    switch (skeletonType) {
      case 'table':
      case 'list':
      case 'grid':
        return true;
      case 'filter-panel':
      case 'inline':
      case 'page':
      case 'graph':
        return false;
    }
  }
}