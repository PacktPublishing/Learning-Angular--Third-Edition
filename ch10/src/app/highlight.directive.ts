import { Directive, ElementRef, OnInit } from '@angular/core';
import { AnimationBuilder, style, animate } from '@angular/animations';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  constructor(private builder: AnimationBuilder, private el: ElementRef) { }

  ngOnInit() {
    const animation = this.builder.build([
      style({ width: '0' }),
      animate(1000, style({ width : '200px' }))
    ]);
    const player = animation.create( this.el.nativeElement );
    player.play();
  }

}
