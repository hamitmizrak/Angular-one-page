// Common Module
import { CommonModule } from '@angular/common';

// Component Core
import { Component, OnInit } from '@angular/core';

// Router Link
import { RouterLink } from '@angular/router';

// BlogCard Ekledim
import { BlogCard } from './BlogCard';
import { OnePageContent } from './OnePageContent';
import { MyWork } from './MyWork';

// Global Service Ekledim
import { AlertifyMessageService } from '../services/alertifyMessage.service';

// Local Service Ekledim
import { BlogArrayDataService } from '../services/blogArrayData.service';

@Component({
  // Html Selector Template
  selector: 'app-onepage-main',

  // Bu component tek başına çalışsın
  standalone: true,

  // import modülümüz
  imports: [CommonModule, RouterLink],

  // Html Url
  templateUrl: './onepage-main.component.html',

  // Css Url
  styleUrl: './onepage-main.component.css',

  // Local Service (BlogCard)
  providers:[BlogArrayDataService]
})
export class OnepageMainComponent implements OnInit {
  // Field

  // Constructor
  constructor(
    private alertifyMessageService: AlertifyMessageService,
    private blogArrayDataService: BlogArrayDataService
    ) {}

  // ngOnInit: Constructor sonrasında çalışır
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this.alertifyMessageService.alertMessage('Anasayfaya Hoşgeldiniz.');
  }

  // Header Link
  onePageContent: OnePageContent[] = [
    { id: 1, title: 'my work' },
    { id: 2, title: 'about' },
    { id: 3, title: 'blog' },
    { id: 4, title: 'contact' },
  ];

  // BlogCard (Local Service)
  blogCard: BlogCard[] =   this.blogArrayDataService.blogCard;

  // SECTION (My Work)
  myWorkCustomIcon: string[] = [
    ' fa-solid fa-bolt ',
    ' fa-solid fa-mug-hot ',
    ' fa-solid fa-pencil ',
    ' fa-solid fa-shield-halved ',
    ' fa-regular fa-face-smile ',
    ' fa-solid fa-fire ',
  ];

  myWork: MyWork[] = [
    {
      id: 1,
      icon: 'text-primary'.concat(
        this.myWorkCustomIcon[Math.floor(Math.random() * 5 + 0)]
      ),
      header: 'Html5',
      title:
        'Frontend Loremsed Nam Excepturi At Voluptatem, Unde, Atque Sunt Expedita Fuga Recusandae Facere Provident, Illo Quibusdam Nihil Quod Culpa Deserunt Quos A Reprehenderit Est Sequi Blanditiis Dolorum? Sed!',
    },
    {
      id: 2,
      icon: 'text-danger'.concat(
        this.myWorkCustomIcon[Math.floor(Math.random() * 5 + 0)]
      ),
      header: 'Css3',
      title:
        'Frontend Loremsed Nam Excepturi At Voluptatem, Unde, Atque Sunt Expedita Fuga Recusandae Facere Provident, Illo Quibusdam Nihil Quod Culpa Deserunt Quos A Reprehenderit Est Sequi Blanditiis Dolorum? Sed!',
    },
    {
      id: 3,
      icon: 'text-warning'.concat(
        this.myWorkCustomIcon[Math.floor(Math.random() * 5 + 0)]
      ),
      header: 'Bootstrap5',
      title:
        'Frontend Loremsed Nam Excepturi At Voluptatem, Unde, Atque Sunt Expedita Fuga Recusandae Facere Provident, Illo Quibusdam Nihil Quod Culpa Deserunt Quos A Reprehenderit Est Sequi Blanditiis Dolorum? Sed!',
    },
    {
      id: 4,
      icon: 'text-secondary'.concat(
        this.myWorkCustomIcon[Math.floor(Math.random() * 5 + 0)]
      ),
      header: 'TypeScript',
      title:
        'Frontend Loremsed Nam Excepturi At Voluptatem, Unde, Atque Sunt Expedita Fuga Recusandae Facere Provident, Illo Quibusdam Nihil Quod Culpa Deserunt Quos A Reprehenderit Est Sequi Blanditiis Dolorum? Sed!',
    },
    {
      id: 5,
      icon: 'text-success'.concat(
        this.myWorkCustomIcon[Math.floor(Math.random() * 5 + 0)]
      ),
      header: 'EcmaScript',
      title:
        'Frontend Loremsed Nam Excepturi At Voluptatem, Unde, Atque Sunt Expedita Fuga Recusandae Facere Provident, Illo Quibusdam Nihil Quod Culpa Deserunt Quos A Reprehenderit Est Sequi Blanditiis Dolorum? Sed!',
    },
    {
      id: 6,
      icon: 'text-dark'.concat(
        this.myWorkCustomIcon[Math.floor(Math.random() * 5 + 0)]
      ),
      header: 'Angular',
      title:
        'Frontend Loremsed Nam Excepturi At Voluptatem, Unde, Atque Sunt Expedita Fuga Recusandae Facere Provident, Illo Quibusdam Nihil Quod Culpa Deserunt Quos A Reprehenderit Est Sequi Blanditiis Dolorum? Sed!',
    },
  ];

  //Method
  detailPage() {
    alert('Detail Page');
    if (window.confirm('Detail sayfasına gitmek mi istiyorsunuz')) {
      window.location.href = 'blog';
    } else {
      alert('Blog Detail Gidilmedi');
    }
  } //end detailPage
} //end onepa-main-component
