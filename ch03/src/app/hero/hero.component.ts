import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnDestroy, OnInit, OnChanges {

  @Input() name: string;
  @Output() liked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy() {

  }

  ngOnChanges(changes: SimpleChanges) {
   const hero = changes['name'];
   const oldValue = hero.previousValue;
   const newValue = hero.currentValue;

   if (!hero.isFirstChange()) {
    console.log(`Hero changed from ${oldValue} to ${newValue}`);
   }
  }

}
