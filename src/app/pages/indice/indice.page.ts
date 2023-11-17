import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indice',
  templateUrl: './indice.page.html',
  styleUrls: ['./indice.page.scss'],
})
export class IndicePage implements OnInit {

  constructor() { }

  verPerfil() {
    // Lógica para ir al perfil del usuario
  }

  agendarCita() {
    // Lógica para agendar una cita
  }

  verHistorial() {
    // Lógica para ver el historial médico
  }


  ngOnInit() {
  }

}
