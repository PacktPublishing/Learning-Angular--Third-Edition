import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-key-logger',
  templateUrl: './key-logger.component.html',
  styleUrls: ['./key-logger.component.css']
})
export class KeyLoggerComponent implements OnInit {

  keys: string = '';
  @ViewChild('keyContainer', {static: true}) input: ElementRef;

  constructor() { }

  ngOnInit(): void {
    const logger = fromEvent(this.input.nativeElement, 'keyup');
    logger.subscribe((evt: KeyboardEvent) => {
      this.keys += evt.key;
    });
  }
}
