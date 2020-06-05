import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexComponent } from './flex.component';

describe('FlexComponent', () => {
  let component: FlexComponent;
  let fixture: ComponentFixture<FlexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
