// CommonModule
import { CommonModule } from '@angular/common';

// Core 
import { Component } from '@angular/core';

@Component({

  // Html Selector Template
  selector: 'app-one-page-login',

  // component: bağımsız çalışabilsin mi
  standalone: true,

  // modül ekleme CommonModule: ngIf, ngFor etc
  imports: [CommonModule],

   // Html5 Url
  templateUrl: './one-page-login.component.html',

  // Css3 Url
  styleUrl: './one-page-login.component.css'
})
export class OnePageLoginComponent {
  // Field

  // Constructor
  constructor(){}

  // Method

} //end OnePageLoginComponent
