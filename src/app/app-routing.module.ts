import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BusScheduleComponent} from './components/bus-schedule/bus-schedule.component';
import {SignupComponent} from './components/signup/signup.component';
import {AboutComponent} from './components/about/about.component';

const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'bus-schedule',
    component: BusScheduleComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
