import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregarmedico',
  templateUrl: './agregarmedico.page.html',
  styleUrls: ['./agregarmedico.page.scss'],
})
export class AgregarmedicoPage implements OnInit {
  medico = {
    nombre: '',
    apellidos: '',
    email: '',
    telefono: '',
    especialidad: '',
    clave: '',
    confirmarclave: '',
  }

  constructor() { }

  ngOnInit() {
  }

}
