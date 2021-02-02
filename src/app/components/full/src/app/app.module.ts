import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { BackgroundComponent } from './background/background.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SignupComponent } from './signup/signup.component';
import { SignupBusdriverComponent } from './signup-busdriver/signup-busdriver.component';
import { BusScheduleComponent } from './bus-schedule/bus-schedule.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    BackgroundComponent,
    NavBarComponent,
    SignupComponent,
    SignupBusdriverComponent,
    BusScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
