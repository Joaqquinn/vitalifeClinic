import { Component, OnInit } from '@angular/core';
import {Router, RouterLink } from '@angular/router';
import { GoogleCalendarServiceService } from 'src/app/services/google-calendar-service.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-indice',
  templateUrl: './indice.page.html',
  styleUrls: ['./indice.page.scss'],
})
export class IndicePage implements OnInit {
userProfile:any
  constructor(
    private router : Router,
    private googleCalendar : GoogleCalendarServiceService,
    private userService : UserService
  ) { }

  verPerfil() {
    this.router.navigate(['/perfil']);
  }

  signOut(){
    this.userService.logout();
  }

  scheduleAppointment() {
    // Aquí debes tener el objeto del evento con la información de la cita
    const event = {
      'summary': 'Cita con el Doctor',
      'location': 'Consultorio Médico',
      'description': 'Consulta médica general',
      'start': {
        'dateTime': '2023-12-20T10:00:00-07:00',
        'timeZone': 'America/New_York'
      },
      'end': {
        'dateTime': '2023-12-20T11:00:00-07:00',
        'timeZone': 'America/New_York'
      },
      // Otras propiedades del evento como 'attendees' (asistentes), 'reminders' (recordatorios), etc.
    };

    // Llamar al servicio para agregar el evento al calendario
    this.googleCalendar.addEvent(event).then(result => {
      // Si todo sale bien, puedes notificar al usuario que la cita fue agendada.
      console.log('Cita agendada con éxito', result);
      // Aquí también podrías hacer una redirección o actualizar la vista.
    }).catch(error => {
      // Aquí manejas los errores, por ejemplo, mostrar un mensaje al usuario.
      console.error('Ocurrió un error al agendar la cita', error);
    });
  }




  ngOnInit() {
    this.userProfile=this.userService.currentUser

  }

}
