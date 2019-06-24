import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RequestsComponent} from './requests/requests.component'
import {ReserveFormComponent} from './reserve-form/reserve-form.component'
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'requests', component: RequestsComponent },
  { path: 'reserveform', component: ReserveFormComponent },
  { path: 'details/:emp.id', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
