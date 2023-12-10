import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-mostrarpacientes',
  templateUrl: './mostrarpacientes.page.html',
  styleUrls: ['./mostrarpacientes.page.scss'],
})
export class MostrarpacientesPage implements OnInit {

  constructor(public userService:UserService) { }

  ngOnInit() {
    this.userService.getPacientes();
  }

  verPaciente(paciente:any){
    console.log("VER PACIENTE" + paciente.correo)
  }

  agregarPaciente(){
    console.log("agregar PACIENTE")
  }

  eliminarPaciente(paciente:any){
    // Call the delete method from the userService passing the patient ID
    this.userService.eliminarUsuario(paciente.correo)
  }
}
