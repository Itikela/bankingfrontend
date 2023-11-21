
/*import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector } from '@angular/core';
import { ModalComponent } from './modal/modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private componentRef: any;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  open(component: any): void {
    // Create a component factory and attach it to the app
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ModalComponent);
    const componentRef = componentFactory.create(this.injector);

    // Attach the component to the app
    this.appRef.attachView(componentRef.hostView);

    // Set input values (e.g., component to display)
    componentRef.instance.childComponent = component;

    // Append the modal component to the body
    document.body.appendChild(componentRef.location.nativeElement);
    this.componentRef = componentRef;
  }

  close(): void {
    // Detach the component and remove it from the DOM
    this.appRef.detachView(this.componentRef.hostView);
    this.componentRef.destroy();
  }
}*/

