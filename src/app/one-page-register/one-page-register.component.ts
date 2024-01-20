import { IUser } from './../one-page-navbar/User';
// CommonModule
import { CommonModule } from '@angular/common';

// Core
import { Component, OnInit } from '@angular/core';

// NgForm
import { FormsModule, NgForm } from '@angular/forms';

// Router Link
import { RouterLink } from '@angular/router';
import { User, userRolles } from '../one-page-navbar/User';

@Component({
  // Html Selector Template
  selector: 'app-one-page-register',

  // component: bağımsız çalışabilsin mi
  standalone: true,

  // modül ekleme CommonModule: ngIf, ngFor etc
  // FormsModule :ngModule için (Two way data binding)
  imports: [CommonModule, RouterLink, FormsModule],

  // Html5 Url
  templateUrl: './one-page-register.component.html',

  // Css3 Url
  styleUrl: './one-page-register.component.css',
})
export class OnePageRegisterComponent implements OnInit {
  // Field

  // Constructor
  constructor() {}

  // ngOnInit
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  //
  user: User = new User(
    1,
    'Hamit',
    'Mızrak',
    'HamitM',
    'hamitmizrak@gmail.com',
    '123456',

    'https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131_1280.jpg',
    String(new Date().getFullYear()),
    'https://admin1/',
    userRolles.admin
  );

  // Method
  // Formdan gelen Verileri almak için
  registerCreate(form: NgForm) {
    alert(form.value.email)
    console.log(form.value);
  } //end Form registerCreate

} //end OnePageRegisterComponent
