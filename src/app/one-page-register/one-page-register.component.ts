// CommonModule
import { CommonModule } from '@angular/common';

// Core
import { Component, OnInit } from '@angular/core';

// Router Link
import { RouterLink } from '@angular/router';

// Alertify
import { AlertifyMessageService } from '../services/alertify-message.service';

// Eğer form ile ilgili çalışma yapacaksak
import { FormsModule, NgForm } from '@angular/forms';
import { UserRegisterService } from '../services/user-register.service';
import { UserRegister } from './UserRegister';

@Component({
  // Html Selector Template
  selector: 'app-one-page-register',

  // component: bağımsız çalışabilsin mi
  standalone: true,

  // modül ekleme CommonModule: ngIf, ngFor etc
  // Eğer form ile ilgili çalışma yapacaksak
  imports: [CommonModule, RouterLink, FormsModule],

  // Html5 Url
  templateUrl: './one-page-register.component.html',

  // Css3 Url
  styleUrl: './one-page-register.component.css',
})
export class OnePageRegisterComponent implements OnInit {
  // Field

  // List
  userList: UserRegister[] = new Array<UserRegister>();

  // Create (ngForm)
  userCreate: UserRegister = new UserRegister();

  // Constructor
  constructor(
    private alertifyMessageService: AlertifyMessageService,
    private userRegisterService: UserRegisterService
  ) {}

  // ngOnInit (List)
  ngOnInit(): void {
    // AlertifyMessage
    this.alertifyMessageService.alertSuccess('Register Sayfasına Hoşgeldiniz');
    this.userRegisterService
      .userListRegisterObservable()
      .subscribe((response) => {
        // Observable
        this.userList = response;
        console.log(response);
        //this.alertifyMessageService.alertSuccess(JSON.stringify(response))
      });
    // Observable subscribe
    //throw new Error('Method not implemented.');
  }

  // Method
  registerCreate(form: NgForm) {
    // Formdan gelen verileri göstermek
    const formData =
      form.value.username + ' ' + form.value.email + ' ' + form.value.password;
    this.alertifyMessageService.alertSuccess(formData);

    // Service subscribe
    this.userRegisterService
      .createUserRegisterObservable(this.userCreate)
      .subscribe((response) => {
        this.alertifyMessageService.alertSuccess(form + ' Eklendi');
        form.reset();
      });
  } //end registerCreate

} //end OnePageRegisterComponent
