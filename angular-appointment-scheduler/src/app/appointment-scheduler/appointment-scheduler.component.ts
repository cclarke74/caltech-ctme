import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-appointment-scheduler',
  templateUrl: './appointment-scheduler.component.html',
  styleUrls: ['./appointment-scheduler.component.css']
})
export class AppointmentSchedulerComponent {

  @Output() addNewAppointment = new EventEmitter();

  appointmentForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.appointmentForm = this.fb.group({
      time: [null, [Validators.required]],
      day: [null, [Validators.required]]
    });
  }


  sendAppointment() {
    this.addNewAppointment.emit(this.appointmentForm.value);
  }

}
