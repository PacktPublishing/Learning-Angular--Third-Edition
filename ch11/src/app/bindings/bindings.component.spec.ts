import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingsComponent } from './bindings.component';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: '<app-bindings [title]="testTitle" (liked)="isFavorite = true"></app-bindings>'
})
export class TestHostComponent {
  testTitle = 'My title';
  isFavorite: boolean;
}

describe('BindingsComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        BindingsComponent,
        TestHostComponent
      ]
    });
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display the title', () => {
    const titleDisplay: HTMLElement = fixture.nativeElement.querySelector('p');
    expect(titleDisplay.textContent).toBe(component.testTitle);
  });

  it('should emit the liked event', () => {
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.isFavorite).toBeTrue();
  });

  it('should emit the liked event using debugElement', () => {
    const button: DebugElement = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);
    expect(component.isFavorite).toBeTrue();
  });
});
