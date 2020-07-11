import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../heroes.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent implements OnChanges {

  @Input() id: string;
  @Output() delete = new EventEmitter();
  hero: Hero;

  constructor(private heroService: HeroService) { }

  deleteHero() {
    this.heroService.deleteHero(this.hero.id).subscribe(() => this.delete.emit());
  }

  ngOnChanges(){
    this.hero = null;
    this.getHero();
  }

  private getHero() {
    this.heroService.getHero(this.id).subscribe(hero => this.hero = hero);
  }

}
