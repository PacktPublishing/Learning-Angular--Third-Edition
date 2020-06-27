import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpyComponent } from './spy.component';
import { Title } from '@angular/platform-browser';

let component: SpyComponent;
let fixture: ComponentFixture<SpyComponent>;

describe('SpyComponent', () => {
  describe('standalone', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [SpyComponent],
        providers: [Title]
      });
      fixture = TestBed.createComponent(SpyComponent);
      component = fixture.componentInstance;
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should set the title', () => {
      const title = TestBed.inject(Title);
      const spy = spyOn(title, 'setTitle');
      fixture.detectChanges();
      expect(spy.calls.mostRecent().args[0]).toBe('My Angular app');
    });
  });

  describe('with spy object', () => {
    let titleSpy: jasmine.SpyObj<Title>;

    beforeEach(() => {
      titleSpy = jasmine.createSpyObj('Title', ['getTitle', 'setTitle']);
      titleSpy.getTitle.and.returnValue('My title');

      TestBed.configureTestingModule({
        declarations: [SpyComponent],
        providers: [
          { provide: Title, useValue: titleSpy }
        ]
      });
      fixture = TestBed.createComponent(SpyComponent);
      component = fixture.componentInstance;
    });

    it('should get the title', () => {
      fixture.detectChanges();
      expect(fixture.nativeElement.textContent).toContain('My title');
    });
  });
});
