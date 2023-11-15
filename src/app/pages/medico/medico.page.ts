import { Component, OnInit, ViewChild } from '@angular/core';
// IMPORTAS ESTA LIBRERIA DE ABAJO //
import type { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.page.html',
  styleUrls: ['./medico.page.scss'],
})
export class MedicoPage implements OnInit {
  // EL CODIGO VA DESDE AQUI //
  inputModel = '';

  @ViewChild('ionInputEl', { static: true }) ionInputEl!: IonInput;

  onInput(ev: { target: any; }) {
    const value = ev.target!.value;

    // ESTE EVITA QUE EL USUARIO PUEDA INGRESAR NÚMEROS O SIMBOLOS //
    const filteredValue = value.replace(/[^a-zA-Z]+/g, '');

    this.ionInputEl.value = this.inputModel = filteredValue;
  }
  // HASTA AQUI //

  constructor() { }

  ngOnInit() {
  }

}
