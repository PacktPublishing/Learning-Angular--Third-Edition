import { Component, OnInit, ElementRef } from '@angular/core';
import { AnimationBuilder, style, animate } from '@angular/animations';

@Component({
  selector: 'app-text-resize',
  templateUrl: './text-resize.component.html',
  styleUrls: ['./text-resize.component.css']
})
export class TextResizeComponent implements OnInit {

  constructor(private builder: AnimationBuilder, private el: ElementRef) { }

  ngOnInit() {
    const factory = this.builder.build([
      style({ width : '0px' }),
      animate(1000, style({ width: '200px' }))
    ]);
    const textEl = this.el.nativeElement.querySelector('.text');
    const player = factory.create(textEl);
    player.play();
  }

}
