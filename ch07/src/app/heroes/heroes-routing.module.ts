import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { AuthGuard } from '../auth.guard';
import { ConfirmGuard } from '../confirm.guard';


const routes: Routes = [
  { path: 'heroes', component: HeroListComponent },
  {
    path: 'hero/:id',
    component: HeroDetailComponent,
    canActivate: [AuthGuard],
    canDeactivate: [ConfirmGuard]
  },
  { path: '', redirectTo: '/heroes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
