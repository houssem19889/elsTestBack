import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalarieComponent } from './salarie/salarie.component';
import {RouterModule, Routes} from '@angular/router';
const routes: Routes = [{
  path: '', redirectTo: 'salarie', pathMatch: 'full'
},
  {
    path: 'salarie', component: SalarieComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
