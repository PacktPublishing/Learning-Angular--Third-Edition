import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  heroes = ['Iron Man', 'Thor', 'Hulk', 'Captain America'];
  today = new Date();
  hero = {
    names: {
      name: 'Iron Man',
      realName: 'Tony Stark'
    },
    planet: 'Earth',
    company: 'Stark Industries'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
