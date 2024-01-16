// import
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

// Declare 
declare var alertify:any;

@Component({
  // html
  selector: 'app-onepage-header',

  // component: bağımsız çalışabilsin mi
  standalone: true,

  // modül ekleme
  imports: [CommonModule],

  // Html5 Url
  templateUrl: './onepage-header.component.html',

  // Css3 Url
  styleUrl: './onepage-header.component.css',
})
export class OnepageHeaderComponent implements OnInit  {
  // Field
  // Constructor
  constructor(){
    console.log("Header Constructor");
  }

  // Sayfanın hazırlanmasında kullanılır.
  ngOnInit(): void{
    console.log("Header ngOnInit");
    // alert("deneme")
    alertify.success("Hoş geldiniz, Gününüz nasıl geçiyor");
  }
  // Method

} //end OnepageHeaderComponent
