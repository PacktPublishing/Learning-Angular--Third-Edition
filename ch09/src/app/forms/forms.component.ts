import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  name = new FormControl('', Validators.required);
  heroes: Hero[] = [
    { id: 1, name: 'Boothstomper' },
    { id: 2, name: 'Drogfisher' },
    { id: 3, name: 'Bloodyllips' },
    { id: 4, name: 'Mr Bu Moverse' },
    { id: 5, name: 'Piranhaelli' }
  ];
  filteredHeroes$: Observable<Hero[]>;
  isChecked: boolean = true;

  ngOnInit() {
    this.filteredHeroes$ = this.name.valueChanges.pipe(
      map(name => this.heroes.filter(hero => hero.name.startsWith(name)))
    );
  }
}
