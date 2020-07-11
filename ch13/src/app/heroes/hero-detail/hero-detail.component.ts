import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Hero } from '../../core/hero';
import { MissionComponent } from '../../missions/mission/mission.component';
import { HeroService } from '../heroes.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent implements OnChanges {

  @Input() id: string;
  @Output() delete = new EventEmitter();
  hero: Hero;

  constructor(private heroService: HeroService, private dialog: MatDialog) { }

  assignMission() {
    this.dialog.open(MissionComponent, { data: this.hero });
  }

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
