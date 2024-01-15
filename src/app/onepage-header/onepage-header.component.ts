// import
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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
export class OnepageHeaderComponent {
  // Field
  //Constructor
  //Method
} //end OnepageHeaderComponent
