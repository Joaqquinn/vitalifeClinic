import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.page.html',
  styleUrls: ['./paciente.page.scss'],
})

export class PacientePage implements OnInit {
  
  error:boolean = false
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private spinner: NgxSpinnerService,
    private router: Router,
    private userService: UserService) {

this.loginForm = this.fb.group({

correo: ['', [Validators.required, Validators.email]],
password: ['', Validators.required],})

}

iniciarSesion() {
  if(this.loginForm.valid) {
    this.error = false;
    this.spinner.show();
    this.userService.login(this.loginForm.value.correo, this.loginForm.value.password).then((userCredential) => {
      this.error = false;
      this.userService.getUser(this.loginForm.value.correo).then((querySnapshot) => {
        this.error = false;
        querySnapshot.forEach((doc) => {
          console.log(doc.data());
          this.userService.currentUser = doc.data();
          this.spinner.hide();
          this.router.navigate(['/indice']);
        });
        this.loginForm.reset();
      }).catch((error) => {
        this.spinner.hide();
        this.error = true;
        console.log(error);
        this.loginForm.reset();
      });
      this.loginForm.reset();
    }).catch((error) => {
      this.spinner.hide();
      this.error = true;
      console.log(error);
      this.loginForm.reset();
    });
    this.spinner.hide();
  }
}


  ngOnInit() {
  }

}
