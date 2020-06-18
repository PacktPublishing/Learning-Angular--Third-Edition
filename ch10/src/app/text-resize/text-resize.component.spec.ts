import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextResizeComponent } from './text-resize.component';

describe('TextResizeComponent', () => {
  let component: TextResizeComponent;
  let fixture: ComponentFixture<TextResizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextResizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextResizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
