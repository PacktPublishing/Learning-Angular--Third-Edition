import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveLoginComponent } from './reactive-login.component';

describe('ReactiveLoginComponent', () => {
  let component: ReactiveLoginComponent;
  let fixture: ComponentFixture<ReactiveLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
