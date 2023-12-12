import { Component, OnInit} from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';
import { Toast } from '@capacitor/toast';

@Component({
  selector: 'app-registropaciente',
  templateUrl: './registropaciente.page.html',
  styleUrls: ['./registropaciente.page.scss'],
})
export class RegistropacientePage implements OnInit {
  registerForm: FormGroup;

  constructor(
    private userService: UserService,
    private router : Router,
    private fb :FormBuilder,
    private spinner: NgxSpinnerService

  ) {
    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      apellidoP: ['', Validators.required],
      edad:['', Validators.required],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]})
   }
    registrar() {
    this.spinner.show();
    if (this.registerForm.valid) {
      this.spinner.show();
      const data = this.registerForm.value;
      console.log('Formulario válido:', this.registerForm.value);
      this.userService.register(data.correo, data.password).then((res) => {
        console.log('Usuario registrado correctamente: ' + res);
        this.userService.createUser(data,'paciente').then((res) => {
          console.log('Usuario creado en la base de datos: ' + res);
          this.spinner.hide();
          Toast.show({
            text: 'Registrado correctamente!'
          });
          this.router.navigate(['/paciente']);
          this.registerForm.reset();
        }).catch((err) => {
          console.log(err);
          this.spinner
        })
      }).catch((err) => {
        console.log(err);
        this.spinner.hide();
      })
    }
  }



  ngOnInit() {
  }

}



