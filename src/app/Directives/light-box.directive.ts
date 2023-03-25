import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
} from '@angular/core';

@Directive({
  selector: '[LightBox]',
})
export class LightBoxDirective implements OnChanges {
  // private elemRef;
  @Input('LightBox') highLightColor: string = 'blue';
  @Input() defaultColor: string = 'black';
  constructor(private elemRef: ElementRef) {
    // this.elemRef.nativeElement.style.border = `2px solid ${this.defaultColor}`;
  }

  ngOnChanges(): void {
    this.elemRef.nativeElement.style.border = `2px solid ${this.defaultColor}`;
  }

  @HostListener('mouseover') onMouseOver() {
    this.elemRef.nativeElement.style.border = `2px solid ${this.highLightColor}`;
  }
  @HostListener('mouseout') onMouseOut() {
    this.elemRef.nativeElement.style.border = `2px solid ${this.defaultColor}`;
  }
}
