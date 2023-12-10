import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-mostrarmedicos',
  templateUrl: './mostrarmedicos.page.html',
  styleUrls: ['./mostrarmedicos.page.scss'],
})
export class MostrarmedicosPage implements OnInit {

  constructor(public userService:UserService,
              private router:Router) { }

  ngOnInit() {
    this.userService.getMedicos();
  }

  verPaciente(paciente:any){
    console.log("VER MEDICO" + paciente.correo)
  }

  agregarMedico(){
    console.log("agregar MEDICO")
    this.router.navigate(['/registrarmedico']);
  }

  eliminarMedico(paciente:any){
    this.userService.eliminarUsuario(paciente.correo)
  }
}
