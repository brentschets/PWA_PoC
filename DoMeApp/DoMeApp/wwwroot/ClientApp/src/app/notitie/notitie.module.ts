import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotitieComponent } from './notitie/notitie.component';
import { AddNotitieComponent } from './add-notitie/add-notitie.component';
import { NotitieListComponent } from './notitie-list/notitie-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';

const routes = [
  { path: 'list', component: NotitieListComponent },
  { path: 'add', component: AddNotitieComponent }
];

@NgModule({
  declarations: [
    NotitieComponent,
    AddNotitieComponent,
    NotitieListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: []
})
export class NotitieModule {}
