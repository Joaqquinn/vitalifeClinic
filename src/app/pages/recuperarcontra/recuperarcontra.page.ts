import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User, sendPasswordResetEmail } from 'firebase/auth';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-recuperarcontra',
  templateUrl: './recuperarcontra.page.html',
  styleUrls: ['./recuperarcontra.page.scss'],
})
export class RecuperarcontraPage implements OnInit {
  recForm: FormGroup;
  password:any;

  constructor(
    private formbuilder : FormBuilder,
    private userService : UserService,
    private auth : Auth
  ) { 
    this.recForm = this.formbuilder.group({
    correo: ['', [Validators.required, Validators.email]],

    })

  }

  ngOnInit() {
  }
  recuperarContra() {
    if (this.recForm.valid) {
      const email = this.recForm.value.correo;
      sendPasswordResetEmail(this.auth, email)
        .then(() => {
          // Mostrar mensaje de éxito
          console.log("Enlace de restablecimiento de contraseña enviado.");
        })
        .catch((error) => {
          // Manejar errores (p.ej., correo electrónico no encontrado)
          console.error("Error al enviar el enlace de restablecimiento: ", error);
        });
    }
  }
  

  retroceder() {
    window.history.back();
  }



}
