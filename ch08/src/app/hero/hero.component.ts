import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  heroDetails = new FormGroup({
    name: new FormControl(''),
    realName: new FormControl(''),
    biometricData: new FormGroup({
      age: new FormControl(''),
      eyes: new FormControl(''),
      hair: new FormControl('')
    })
  });

  constructor() { }

  ngOnInit(): void {
  }

}
