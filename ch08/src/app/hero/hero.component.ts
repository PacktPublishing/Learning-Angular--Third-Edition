import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { reservedNameValidator } from '../reserved-name.directive';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  get powers(): FormArray {
    return this.heroDetails.controls.powers as FormArray;
  }

  heroDetails = new FormGroup({
    name: new FormControl('', reservedNameValidator()),
    realName: new FormControl(''),
    biometricData: new FormGroup({
      age: new FormControl(''),
      eyes: new FormControl(''),
      hair: new FormControl('')
    }),
    powers: new FormArray([])
  });

  constructor() { }

  ngOnInit(): void {
  }

  addPower() {
    this.powers.push(new FormControl(''));
  }

  addHero() {
    this.heroDetails.setValue({
      name: 'Maleward',
      realName: 'Agavens Jenmar',
      biometricData: {
        age: 30,
        eyes: '#006400',
        hair: '#8b4513'
      },
      powers: []
    });
  }

  addBio() {
    this.heroDetails.patchValue({
      biometricData: {
        age: 35,
        hair: '#ff0000'
      },
    })
  }

}
