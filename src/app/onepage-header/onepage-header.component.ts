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
  styleUrl: './onepage-header.component.css'
})
export class OnepageHeaderComponent {

  homePage: String = 'Anasayfa 44';

  // navBar adında bir obje oluşturunuz.
  // Logo(string), link(string), search, attribute oluşturuyorsunuz.
  // Link (dizi)
  // navBar:{}={};
  navBar:{
    isLogin:boolean,
    // logo: string, (fontAwesome,picture,link,title)
    navbar:Array<any>,
    search:{}
  }={
    isLogin:true,
    //Anasayfa,AboutMe,Blog,Contact  name: Anasayfa, link: http://, fontAwesome
    navbar:[
      {id:1,name:"Anasayfa",link:"/",fontAwesome:"fa-solid fa-house-chimney"},
      {id:2,name:"AboutMe",link:"/about-me",fontAwesome:"font-2"},
      {id:3,name:"Blog",link:"/blog",fontAwesome:"font-3"},
      {id:4,name:"Contact",link:"/contact",fontAwesome:"font-4"},
     ],  
    search:{
      name:"Search",
      placeholder:"Search",
      type:"text",
    }
  }; //navBar Object


} //end OnepageHeaderComponent
