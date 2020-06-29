import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-menu',
  template: `
    <a routerLink="home">Home</a>
    <a [routerLink]="['heroes', 1]">Hero</a>
    <router-outlet></router-outlet>
  `
})
export class MenuComponent implements OnInit {

  heroId: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => this.heroId = +params.get('id'));
  }

}
