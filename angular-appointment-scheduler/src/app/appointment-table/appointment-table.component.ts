import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-appointment-table',
  templateUrl: './appointment-table.component.html',
  styleUrls: ['./appointment-table.component.css']
})
export class AppointmentTableComponent {

  @Input() appointmentDetails: any;

}
