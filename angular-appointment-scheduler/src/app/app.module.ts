import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppointmentSchedulerComponent } from './appointment-scheduler/appointment-scheduler.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppointmentTableComponent } from './appointment-table/appointment-table.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from './appointment/appointment.component';
import { ClientComponent } from './client/client.component';

const routes: Routes = [{
  path: '', redirectTo: 'login', pathMatch: 'full'
},{
  path: 'login', component: LoginComponent
}, {
  path: 'client', component: ClientComponent
}, {
  path: 'appointment', component: AppointmentComponent
}]

@NgModule({
  declarations: [AppComponent, AppointmentSchedulerComponent, AppointmentTableComponent, LoginComponent, RegisterComponent, AppointmentComponent, ClientComponent], 
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {

}
