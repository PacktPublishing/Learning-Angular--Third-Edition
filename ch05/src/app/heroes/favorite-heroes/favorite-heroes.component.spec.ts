import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteHeroesComponent } from './favorite-heroes.component';

describe('FavoriteHeroesComponent', () => {
  let component: FavoriteHeroesComponent;
  let fixture: ComponentFixture<FavoriteHeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteHeroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
