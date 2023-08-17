import { Component } from '@angular/core';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {
  appointmentDetails = [{
    time: "9:00 AM",
    days: [{
      day: "Monday",
      isScheduled: false
    },{
      day: "Tuesday",
      isScheduled: false
    },{
      day: "Wednesday",
      isScheduled: false
    },{
      day: "Thursday",
      isScheduled: false
    },{
      day: "Friday",
      isScheduled: false
    }, ]
    
  },
  {
    time: "10:00 AM",
    days: [{
      day: "Monday",
      isScheduled: false
    },{
      day: "Tuesday",
      isScheduled: false
    },{
      day: "Wednesday",
      isScheduled: false
    },{
      day: "Thursday",
      isScheduled: false
    },{
      day: "Friday",
      isScheduled: false
    }, ]
    
  },{
    time: "11:00 AM",
    days: [{
      day: "Monday",
      isScheduled: false
    },{
      day: "Tuesday",
      isScheduled: false
    },{
      day: "Wednesday",
      isScheduled: false
    },{
      day: "Thursday",
      isScheduled: false
    },{
      day: "Friday",
      isScheduled: false
    }, ]
    
  },{
    time: "12:00 PM",
    days: [{
      day: "Monday",
      isScheduled: false
    },{
      day: "Tuesday",
      isScheduled: false
    },{
      day: "Wednesday",
      isScheduled: false
    },{
      day: "Thursday",
      isScheduled: false
    },{
      day: "Friday",
      isScheduled: false
    }, ]
    
  },{
    time: "1:00 PM",
    days: [{
      day: "Monday",
      isScheduled: false
    },{
      day: "Tuesday",
      isScheduled: false
    },{
      day: "Wednesday",
      isScheduled: false
    },{
      day: "Thursday",
      isScheduled: false
    },{
      day: "Friday",
      isScheduled: false
    }, ]
    
  },{
    time: "2:00 PM",
    days: [{
      day: "Monday",
      isScheduled: false
    },{
      day: "Tuesday",
      isScheduled: false
    },{
      day: "Wednesday",
      isScheduled: false
    },{
      day: "Thursday",
      isScheduled: false
    },{
      day: "Friday",
      isScheduled: false
    }, ]
    
  },{
    time: "3:00 PM",
    days: [{
      day: "Monday",
      isScheduled: false
    },{
      day: "Tuesday",
      isScheduled: false
    },{
      day: "Wednesday",
      isScheduled: false
    },{
      day: "Thursday",
      isScheduled: false
    },{
      day: "Friday",
      isScheduled: false
    }, ]
    
  },{
    time: "4:00 PM",
    days: [{
      day: "Monday",
      isScheduled: false
    },{
      day: "Tuesday",
      isScheduled: false
    },{
      day: "Wednesday",
      isScheduled: false
    },{
      day: "Thursday",
      isScheduled: false
    },{
      day: "Friday",
      isScheduled: false
    }, ]
    
  }];

  addNewAppointment(appointment: any) {
    console.log(appointment);
    const selectedTime = this.appointmentDetails.find((item) => item.time === appointment.time);
    const selectedDay = selectedTime?.days.find((item) => item.day === appointment.day);
    if (selectedDay) {
      selectedDay.isScheduled = true;

    }
  }
}
