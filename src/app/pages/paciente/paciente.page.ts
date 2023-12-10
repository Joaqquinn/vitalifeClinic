import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { NgxSpinnerService } from 'ngx-spinner';
import { GoogleCalendarServiceService } from 'src/app/services/google-calendar-service.service';
import { Firestore, collection, addDoc, query, where, getDocs, setDoc, doc, getDoc, docData } from '@angular/fire/firestore';
import { UserService } from 'src/app/services/user.service';
import { user } from '@angular/fire/auth';
import { Toast } from '@capacitor/toast';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.page.html',
  styleUrls: ['./paciente.page.scss'],
})

export class PacientePage implements OnInit {
  isAuthenticated = false;

  error:boolean = false
  loginForm: FormGroup;
  validador:boolean = false

  constructor(
    private fb: FormBuilder,
    private spinner: NgxSpinnerService,
    private router: Router,
    private userService: UserService,
    private googleCalendar: GoogleCalendarServiceService,
    private Firestore : Firestore,
    ) {

this.loginForm = this.fb.group({

correo: ['', [Validators.required, Validators.email]],
password: ['', Validators.required],})
}

iniciarSesion() {
  if(this.loginForm.valid) {
    this.validador = false
    this.error = false;
    this.spinner.show();

    this.userService.getUser(this.loginForm.value.correo).then((querySnapshot) => {
      this.error = false;
      this.userService.login(this.loginForm.value.correo, this.loginForm.value.password).then((userCredential) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.data());
          this.userService.currentUser = doc.data();
          this.spinner.hide();
          this.router.navigate(['/indice']);
        });
        this.loginForm.reset();
        this.error = false;
      }).catch((error) => {
        this.spinner.hide();
        this.error = true;
        console.log(error);
        this.loginForm.reset();
      });
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
