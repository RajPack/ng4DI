import { Input, Directive, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[appLoop]"
})
export class MyLoopDirective {
  @Input()
  set appLoop(count) {
    console.log(this.templateRef);
    console.log(count);
    this.viewContainer.clear();
    for (let i = 0; i < count; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}
}
