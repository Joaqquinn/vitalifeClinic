import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-horastomadas',
  templateUrl: './horastomadas.page.html',
  styleUrls: ['./horastomadas.page.scss'],
})
export class HorastomadasPage implements OnInit {

  constructor(public userService:UserService) { }

  ngOnInit() {
    this.userService.getFechasPaciente();
  }

}
