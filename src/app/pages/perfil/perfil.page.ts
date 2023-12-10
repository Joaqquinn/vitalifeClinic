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
    this.usuario.correo = this.userService.currentUser.email;
    this.usuario.nombreUsuario = this.userService.currentUser.username;
    this.usuario.contrasena = this.userService.currentUser.password;
    this.userForm = this.formBuilder.group({
      correo: [this.userService.currentUser.correo, Validators.required],
      nombreUsuario: [this.userService.currentUser.nombre, Validators.required],
      apellidoP: [this.userService.currentUser.apellidoP, Validators.required],
      apellidoM: [this.userService.currentUser.apellidoM, Validators.required],
      direccion: [this.userService.currentUser.direccion, Validators.required],
      telefono: [this.userService.currentUser.telefono, Validators.required],
      edad: [this.userService.currentUser.edad, Validators.required],
      contrasena: [this.userService.currentUser.password, [Validators.required, Validators.minLength(6)]],
      });
  }

  ngOnInit() {
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
