import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmGuard implements CanDeactivate<HeroDetailComponent> {

  canDeactivate(
    component: HeroDetailComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.showConfirm();
  }

  private showConfirm(): Observable<boolean> {
    const confirmation = window.confirm('Are you sure?');
    return of(confirmation);
  }

}
