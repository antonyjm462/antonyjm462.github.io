import { Directive, HostListener } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[stop-parent]'
})
export class StopParentDirective {

  constructor() { }

  @HostListener('click')
  @HostListener('mousedown')
  public onClick(event: any) :void{
    event.stopPropagation();
  }
  public onMousedown(event: any) :void{
    event.stopPropagation();
  }


}