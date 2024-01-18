// CommonModule
import { CommonModule } from '@angular/common';

// Core
import { Component } from '@angular/core';

@Component({
  // Html Selector Template
  selector: 'app-one-page-register',

  // component: bağımsız çalışabilsin mi
  standalone: true,

  // modül ekleme CommonModule: ngIf, ngFor etc
  imports: [CommonModule],

  // Html5 Url
  templateUrl: './one-page-register.component.html',

  // Css3 Url
  styleUrl: './one-page-register.component.css',
})
export class OnePageRegisterComponent {


  // Field

  // Constructor
  constructor(){}

  // Method

} //end OnePageRegisterComponent
