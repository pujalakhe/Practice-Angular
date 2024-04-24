import { Directive,TemplateRef,ViewContainerRef,Input } from '@angular/core';

@Directive({
  selector: '[appIfDirective]'
})
export class IfDirectiveDirective {
  private hasView = false;
  constructor(
    private templateRef:TemplateRef<any>,
    private viewContainer:ViewContainerRef
  ) { }
  @Input() set appIfDirective(condition:boolean)
  {
    if(condition && !this.hasView)
      {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.hasView=true;
      }
      else if (!condition && this.hasView) {
        this.viewContainer.clear();
        this.hasView = false;
      }
  }
}
