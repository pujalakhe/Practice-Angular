import { Directive,Input,ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  @Input() hover:string="";
 
  constructor(private el:ElementRef) { }
  ngOnInit(){
    this.el.nativeElement.style.backgroundColor="blue";
    this.el.nativeElement.style.width="200px";
    this.el.nativeElement.style.color="white";
  }

  @HostListener ("mouseenter") onMouseEnter()
  {
    this.highlight(this.hover,"500px");
  }
 @HostListener ("mouseleave") onMouseLeave()
 {
    this.highlight('blue', '200px');
 }
 
  highlight(color:string,width:string)
  {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.width= width;
    this.el.nativeElement.style.transition = "1s all ease-in-out";
  }
}
