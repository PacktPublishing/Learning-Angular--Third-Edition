import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import { By } from '@angular/platform-browser';
import { RouterLinkDirectiveStub } from '../../testing/router-link-directive-stub';
import { ActivatedRouteStub } from '../../testing/activated-route-stub';
import { ActivatedRoute } from '@angular/router';
import { RouterOutletComponentStub } from '../../testing/router-outlet-component-stub';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(() => {
    const activatedRoute = new ActivatedRouteStub();
    activatedRoute.setParamMap({id: 1});

    TestBed.configureTestingModule({
      declarations: [
        MenuComponent,
        RouterLinkDirectiveStub,
        RouterOutletComponentStub
      ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRoute }
      ]
    });
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set up routerLink directives', () => {
    const linkDe = fixture.debugElement.queryAll(By.directive(RouterLinkDirectiveStub));
    const links = linkDe.map(de => de.injector.get(RouterLinkDirectiveStub));
    expect(links.length).toBe(2);
    expect(links[0].linkParams).toEqual('home');
    expect(links[1].linkParams).toEqual(['heroes', 1]);
  });

  it('should get the id parameter', () => {
    expect(component.heroId).toBe(1);
  });
});
