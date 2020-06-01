import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { heroes } from '../heroes';
import { Hero } from '../hero.model';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  name = new FormControl('', Validators.required);
  heroes = heroes;
  filteredHeroes$: Observable<Hero[]>;
  isChecked: boolean = true;

  ngOnInit() {
    this.filteredHeroes$ = this.name.valueChanges.pipe(
      map(name => this.heroes.filter(hero => hero.name.startsWith(name)))
    );
  }
}
