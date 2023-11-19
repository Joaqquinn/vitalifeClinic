import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
userProfile : any
  constructor(
    private userService: UserService,
    private auth : Auth
  ) { }

  ngOnInit() {
  
  }




      
      
  

}
