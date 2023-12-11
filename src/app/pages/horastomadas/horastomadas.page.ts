import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Toast } from '@capacitor/toast';

@Component({
  selector: 'app-horastomadas',
  templateUrl: './horastomadas.page.html',
  styleUrls: ['./horastomadas.page.scss'],
})
export class HorastomadasPage implements OnInit {

  constructor(public userService:UserService) { }

  ngOnInit() {
  }

  eliminarHora(hora:any){
    this.userService.eliminarHora(hora);
    Toast.show({
      text: 'Hora eliminada con exito',
      duration: 'long'
    })
  }

}
