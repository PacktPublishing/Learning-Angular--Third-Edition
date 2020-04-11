import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  heroes = ['Boothstomper', 'Drogfisher', 'Bloodyllips', 'Mr Bu Moverse'];
  today = new Date();
  hero = {
    names: {
      name: 'Boothstomper',
      realName: 'Alfie Best'
    },
    planet: 'Earth',
    color: 'cyan'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
