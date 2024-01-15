// Common Module
import { CommonModule } from '@angular/common';

// Component Core
import { Component } from '@angular/core';

// BlogCard Ekledim
import { BlogCard } from './BlogCard';

@Component({
  // html Template
  selector: 'app-onepage-main',

  // Bu component tek başına çalışsın
  standalone: true,

  // import modülümüz
  imports: [CommonModule],

  // Html Url
  templateUrl: './onepage-main.component.html',

  // Css Url
  styleUrl: './onepage-main.component.css',
})
export class OnepageMainComponent {
  // Field

  // 1.YOL
  // blogCard: any[] = [

  // 2.YOL (Mock Api)
  blogCard: BlogCard[] = [
    {
      id: 1,
      title: 'Title-1',
      text: 'Text-1',
      description: 'Description-1',
      picture:
        'https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131_1280.jpg',
        date: String(new Date().getFullYear()),
        link: 'https://deneme1/',
    },
    {
      id: 2,
      title: 'Title-2',
      text: 'Text-2',
      description: 'Description-2',
      picture:
        'https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131_1280.jpg',
        date: String(new Date().getFullYear()),
        link: 'https://deneme2/',
      }
    ,
    {
      id: 3,
      title: 'Title-3',
      text: 'Text-3',
      description: 'Description-3',
      picture:
        'https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131_1280.jpg',
        date: String(new Date().getFullYear()),
        link: 'https://deneme3/',
      },
    {
      id: 4,
      title: 'Title-4',
      text: 'Text-4',
      description: 'Description-4',
      picture:
        'https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131_1280.jpg',
        date: String(new Date().getFullYear()),
        link: 'https://deneme4/',
      },
    {
      id: 5,
      title: 'Title-5',
      text: 'Text-5',
      description: 'Description-5',
      picture:
        'https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131_1280.jpg',
        date: String(new Date().getFullYear()),
        link: 'https://deneme5/',
      },
    {
      id: 6,
      title: 'Title-6',
      text: 'Text-6',
      description: 'Description-6',
      picture:
        'https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131_1280.jpg',
        date: String(new Date().getFullYear()),
        link: 'https://deneme6/',
      },
  ];

  //Constructor

  //Method
}
