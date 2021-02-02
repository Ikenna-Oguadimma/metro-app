import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonsComponent} from './components/buttons/buttons.component';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {BackgroundComponent} from './components/background/background.component';
import {SignupBusdriverComponent} from './components/signup-busdriver/signup-busdriver.component';
import {BusScheduleComponent} from './components/bus-schedule/bus-schedule.component';
import {FormsModule} from '@angular/forms';
import { SignupComponent } from './components/signup/signup.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    BackgroundComponent,
    NavBarComponent,
    SignupBusdriverComponent,
    BusScheduleComponent,
    SignupComponent,
    AboutComponent,
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
