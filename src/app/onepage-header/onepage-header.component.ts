// CommonModule
import { CommonModule } from '@angular/common';

//Core
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
  header:string="Angular Eğitimine Hoşgeldiniz";
  title:string="Html5,Css3, Javascript, Ecmascript, Typescript, Angular";

socialLinkedin:string="Linkedin";
socialGithub:string="GitHub";
socialYoutube:string="Youtube";
socialBlogger:string="Blogger";

  // Constructor
  constructor(){}

  // Method

} //end OnepageHeaderComponent
