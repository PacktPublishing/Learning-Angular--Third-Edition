import { Component, Input, OnInit } from '@angular/core';

import { Hero } from '../../core/hero';
import { Mission } from '../../core/mission';
import { MissionService } from '../missions.service';

@Component({
  selector: 'app-mission-list',
  templateUrl: './mission-list.component.html'
})
export class MissionListComponent implements OnInit {

  @Input() hero: Hero;

  constructor(public missionService: MissionService) { }

  completeMission(mission: Mission) {
    this.missionService.completeMission(mission, this.hero).subscribe(() => {
      this.hero.missions = this.hero.missions.filter(m => m !== mission);
    });
  }

  getPriorityColor(mission: Mission): string {
    switch(mission.priority) {
      case 'medium':
        return 'yellow';
      case 'high':
        return 'red';
    }
  }

  ngOnInit() {
    this.missionService.missionAdded$.subscribe(mission => {
      if (!this.hero.missions) {
        this.hero.missions = [];
      }
      this.hero.missions.push(mission);
    });
  }

}
