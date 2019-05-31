import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SelectivePreloadStrategy } from './selective-preload-strategy';
import { AuthGuard } from './user/auth.guard';

const appRoutes: Routes = [
  {
    path: 'notitie',
    canActivate: [AuthGuard],
    loadChildren: './notitie/notitie.module#NotitieModule',
    data: { preload: true }
  },
  { path: '', redirectTo: 'notitie/list', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      preloadingStrategy: SelectivePreloadStrategy
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
