import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BusScheduleComponent} from './components/bus-schedule/bus-schedule.component';

const routes: Routes = [
  {
    path: 'bus-schedule',
    component: BusScheduleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
