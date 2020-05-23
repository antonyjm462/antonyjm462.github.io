import { Directive, HostListener,Renderer, ElementRef  } from '@angular/core';
import { AboutService } from '../services/about.service';

@Directive({
  selector: '[appChangeImg]'
})
export class ChangeImgDirective {

  constructor(private about: AboutService,public elementRef: ElementRef,
    private renderer: Renderer) { }

  // @HostListener('click', ['$event'])
  // public onClick(event: any) :void{
  //   console.log("mouse clicked");
  //   this.about.incImgVal();
  // }

  @HostListener('mousedown', ['$event'])
  public onMousedown(event: any) :void{
    this.about.incImgVal();
  }

  @HostListener('mouseover', ['$event'])
  public onMouseover(event: any) :void {
    this.about.incImgVal();
  }

  @HostListener('mouseout', ['$event']) 
  public mouseout(event: any) :void {
    this.about.incImgVal();
  }

}
