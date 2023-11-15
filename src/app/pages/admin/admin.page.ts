import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  email:string;
  password:string;
  constructor() {
    this.email="admin@email.com";
    this.password="Admin.123"
  }

  ngOnInit() {
  }

}