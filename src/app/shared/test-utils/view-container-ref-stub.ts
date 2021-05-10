import {
  ComponentFactory,
  ComponentRef,
  ElementRef,
  EmbeddedViewRef,
  Injector,
  NgModuleRef,
  TemplateRef,
  ViewContainerRef,
  ViewRef
} from '@angular/core';

export class ViewContainerRefStub extends ViewContainerRef {
  element: ElementRef<any> | any;
  injector: Injector | any;
  parentInjector: Injector | any;
  length = 0;

  clear(): void {}

  get(index: number): ViewRef | any {
    return null;
  }

  createEmbeddedView<C>(templateRef: TemplateRef<C>, context?: C, index?: number): EmbeddedViewRef<C> | any {
    return null;
  }

  createComponent<C>(
    componentFactory: ComponentFactory<C>,
    index?: number,
    injector?: Injector,
    projectableNodes?: any[][],
    ngModule?: NgModuleRef<any>
  ): ComponentRef<C> | any {
    return null;
  }

  insert(viewRef: ViewRef, index?: number): ViewRef | any {
    return null;
  }

  move(viewRef: ViewRef, currentIndex: number): ViewRef | any {
    return null;
  }

  indexOf(viewRef: ViewRef): number {
    return -1;
  }

  remove(index?: number): void {}

  detach(index?: number): ViewRef | any {
    return null;
  }
}
