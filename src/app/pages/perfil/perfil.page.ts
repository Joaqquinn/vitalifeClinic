import { Component, OnInit, TemplateRef } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { UserService } from 'src/app/services/user.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface User {
  correo: string;
  nombreUsuario: string;
  apellidoP: string;
  apellidoM: string;
  direccion?: string;
  telefono?: string;
  edad?: string;
  contrasena: string;
}

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
userProfile : any
modalRef?: BsModalRef;
userForm: FormGroup;

usuario: User = {
  correo: '',
  nombreUsuario: '',
  apellidoP: '',
  apellidoM: '',
  direccion: '',
  telefono: '',
  edad: '',
  contrasena: ''
};


  constructor(
    public userService: UserService,
    private auth : Auth,
    private modalService: BsModalService,
    private formBuilder: FormBuilder
  ) {
    this.userProfile=this.userService.currentUser
    this.usuario.correo = this.userProfile.email;
    this.usuario.nombreUsuario = this.userProfile.username;
    this.usuario.contrasena = this.userProfile.password;
    this.userForm = this.formBuilder.group({
      correo: [this.userProfile.correo, Validators.required],
      nombreUsuario: [this.userProfile.nombre, Validators.required],
      apellidoP: [this.userProfile.apellidoP, Validators.required],
      apellidoM: [this.userProfile.apellidoM, Validators.required],
      direccion: [this.userProfile.direccion, Validators.required],
      telefono: [this.userProfile.telefono, Validators.required],
      edad: [this.userProfile.edad, Validators.required],
      contrasena: [this.userProfile.password, [Validators.required, Validators.minLength(6)]],
      });
  }

  ngOnInit() {
    this.userProfile=this.userService.currentUser
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  guardarCambios() {
    const user = {
      username: this.userForm.value.nombreUsuario,
      password: this.userForm.value.contrasena,
      apellidoP: this.userForm.value.apellidoP,
      apellidoM: this.userForm.value.apellidoM,
      direccion: this.userForm.value.direccion,
      telefono: this.userForm.value.telefono,
      edad: this.userForm.value.edad,
      email: this.userForm.value.correo
    }
    console.log('Datos del usuario guardados:', user);
    this.userService.updateUser(user);
    this.modalRef?.hide();
  }

  validationMessages = {
    username: {
      required: 'Debe ingresar un nombre de usuario.'
    },
    apellidoP: {
      required: 'Debe ingresar un apellidos.'
    },
    apellidoM: {
      required: 'Debe ingresar un apellidos.'
    },
    direccion: {
      required: 'Debe ingresar una direccion.'
    },
    telefono: {
      required: 'Debe ingresar un numero de telefono.'
    },
    edad: {
      required: 'Debe ingresar una edad.'
    },
    email: {
      required: 'Debe ingresar un correo electronico.',
      email: 'El formato del correo electrónico no es válido.'
    },
    password: {
      required: 'Debe ingresar una contraseña.',
      minlength: 'La contraseña debe tener al menos 6 caracteres.'
    },
    confirmPassword: {
      required: 'La confirmación de contraseña es obligatoria.',
      passwordMismatch: 'Las contraseñas no coinciden.'
    }
  };

}
