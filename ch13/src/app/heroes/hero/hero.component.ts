import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { HeroService } from '../heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  heroForm: FormGroup;

  constructor(private builder: FormBuilder, private heroService: HeroService, private router: Router) { }

  ngOnInit() {
    this.heroForm = this.builder.group({
      name: ['', Validators.required],
      alias: ['', Validators.required],
      shortBio: ['']
    });
  }

  save() {
    this.heroService.createHero(this.heroForm.value).subscribe(() => this.router.navigateByUrl('/'));
  }

}
