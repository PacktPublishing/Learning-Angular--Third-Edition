import { Component, OnInit } from '@angular/core';
import { heroes } from '../heroes';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  heroes = heroes;

  constructor() { }

  ngOnInit(): void {
  }

}
