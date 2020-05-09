import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Hero } from '../hero.model';
import { HeroService } from '../hero.service';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;

  constructor(private route: ActivatedRoute, private heroService: HeroService) { }

  ngOnInit(): void {
    this.hero = this.route.snapshot.data.hero;
  }

  private getHeroObs() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const id = +params.get('id');
        return this.heroService.getHero(id);
      }),
      map(hero => this.hero = hero)
    ).subscribe();
  }

  private getHeroSnap() {
    const id = this.route.snapshot.params['id'];
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

}
