import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { AsyncComponent } from './async.component';

describe('AsyncComponent', () => {
  let component: AsyncComponent;
  let fixture: ComponentFixture<AsyncComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsyncComponent]
    });
    fixture = TestBed.createComponent(AsyncComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get data with async', async(() => {
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(fixture.nativeElement.querySelectorAll('p').length).toBe(5);
    });
  }));

  it('should get data with async/await', async () => {
    fixture.detectChanges();

    await fixture.whenStable();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('p').length).toBe(5);
  });

  it('should get data with fakeAsync', fakeAsync(() => {
    fixture.detectChanges();

    tick(500);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('p').length).toBe(5);
  }));
});
