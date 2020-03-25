import { Component, OnInit, Input } from '@angular/core';
import { HeroDetailService } from './hero-detail.service';
import { Hero } from '../hero.model';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  providers: [HeroDetailService]
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;
  @Input() id: number;

  constructor(private heroDetailService: HeroDetailService) { }

  ngOnInit(): void {
    this.hero = this.heroDetailService.getHero(this.id);
  }

}
