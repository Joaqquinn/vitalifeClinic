import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-indice',
  templateUrl: './indice.page.html',
  styleUrls: ['./indice.page.scss'],
})
export class IndicePage implements OnInit {

  constructor(
    private router : Router
  ) { }

  verPerfil() {
    this.router.navigate(['/perfil']);
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
