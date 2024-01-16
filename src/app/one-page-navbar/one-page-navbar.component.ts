import { User, userRolles } from './User';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-one-page-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './one-page-navbar.component.html',
  styleUrl: './one-page-navbar.component.css',
})
export class OnePageNavbarComponent {
  // Field
  homePage: String = 'Anasayfa 44';

  // user objemiz olsun ve türü User classında ;
  // username, email,password bilgileri yer alsın
  // username:HamitM., email:hamitmizrak@gmail.com ,password: 123456 bilgileri yer alsın
  // username: String = 'Hamit Mizrak';
  /*
    id:number;
    username:string;
    email:string;
    passwords:string;
    pictures:string;
    date:string;
    link:string;
  */
 User: User[]=[
  {
    id:1,
    username:'Hamit Mizrak',
    email:'hamitmizrak@gmail.com',
    password:'123456',
    pictures:'https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131_1280.jpg',
    date:String(new Date().getFullYear()),
    link:'https://admin1/',
    rolles:userRolles.admin,
  },
  {
    id:2,
    username:'writer1',
    email:'writer1@gmail.com',
    password:'123456',
    pictures:'https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131_1280.jpg',
    date:String(new Date().getFullYear()),
    link:'https://writer1/',
    rolles:userRolles.writer,
  },
  {
    id:3,
    username:'user1',
    email:'huser1@gmail.com',
    password:'123456',
    pictures:'https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131_1280.jpg',
    date:String(new Date().getFullYear()),
    link:'https://user1/',
    rolles:userRolles.user,
  }
 ];

  // navBar adında bir obje oluşturunuz.
  // Logo(string), link(string), search, attribute oluşturuyorsunuz.
  // Link (dizi)
  // navBar:{}={};
  navBar: {
    isLogin: boolean;
    // logo: string, (fontAwesome,picture,link,title)
    logo: {
      logoName: string;
      logoFontAwesome: string;
      logoPicture: string;
      logoLink: string;
      logoTitle: string;
    };
    navbar: Array<any>;
    search: {
      name: string;
      placeholder: string;
      type: string;
      style: string;
    };
  } = {
    isLogin: true,
    logo: {
      logoName: 'Logo',
      logoFontAwesome: 'fa-solid fa-code-branch',
      logoPicture:
        'https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131_1280.jpg',
      logoLink: '/',
      logoTitle: 'Title',
    },
    //Anasayfa,AboutMe,Blog,Contact  name: Anasayfa, link: http://, fontAwesome
    navbar: [
      {
        id: 1,
        name: 'Anasayfa',
        link: '/',
        fontAwesome: 'fa-solid fa-house-chimney',
      },
      { id: 2, name: 'AboutMe', link: '/about-me', fontAwesome: 'font-2' },
      { id: 3, name: 'Blog', link: '/blog', fontAwesome: 'font-3' },
      { id: 4, name: 'Contact', link: '/contact', fontAwesome: 'font-4' },
    ],
    search: {
      name: 'Search',
      placeholder: 'Arama için ...',
      type: 'text',
      style: 'btn btn-primary',
    },
  }; //navBar Object
  //Constructor
  // Method
}
