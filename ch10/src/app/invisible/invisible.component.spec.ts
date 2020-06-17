import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvisibleComponent } from './invisible.component';

describe('InvisibleComponent', () => {
  let component: InvisibleComponent;
  let fixture: ComponentFixture<InvisibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvisibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvisibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
