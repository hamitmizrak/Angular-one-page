// Angular Common
import { CommonModule } from '@angular/common';

// Angular Core
import { Component, OnInit } from '@angular/core';

// Router Link
import { RouterLink } from '@angular/router';

// BlogCard Ekledim
import { BlogCard } from './BlogCard';

// Page Content
import { OnePageContent } from './OnePageContent';

// SERVICE
// AlertifyMessageService (Global Service)
import { AlertifyMessageService } from '../services/alertify-message.service';

// BlogArrayService (Local Service)
import { BlogArrayService } from '../services/blog-array.service';

// MyWork
import { MyWork } from './MyWork';

@Component({
  // Html Selector Template
  selector: 'app-onepage-main',

  // Bu component tek başına çalışsın
  standalone: true,

  // import modülümüz
  imports: [CommonModule, RouterLink],

  // Html Url
  templateUrl: './onepage-main.component.html', //1.YOL
  // template: `<h1>Merhabalar</h1>`, // 2.YOL

  // Css Url
  styleUrl: './onepage-main.component.css',

  // Local Service İçin Mutlaka providers eklemlisniz.
  providers: [BlogArrayService],
})
export class OnepageMainComponent implements OnInit {
  // Field

  // Constructor
  // Service eklemek istiyorsak
  // Global Service (AlertifyMessageService)
  // Local Service (BlogArrayService)
  // Local Service için : providers Eklemelisiniz.
  constructor(
    private alertifyMessageService: AlertifyMessageService,
    private blogArrayService: BlogArrayService
  ) {}

  // ngOnInit
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    // Alertify Calling
    this.alertifyMessageService.alertMessage('Sayfamıza Hoşgeldiniz.');
  }

  // Page Content Title
  onePageContent: OnePageContent[] = [
    { id: 1, title: 'my work' },
    { id: 2, title: 'about' },
    { id: 3, title: 'blog' },
    { id: 4, title: 'contact' },
  ];

  // MyWork Icon (Random Icon)
  myWorkRandomIconFunction(): string {
    let iconArray: string[] = [
      'fa-solid fa-image',
      'fa-solid fa-camera-retro',
      'fa-solid fa-umbrella',
      'fa-brands fa-docker',
      'fa-regular fa-thumbs-up',
      'fa-solid fa-wifi',
    ];
    return iconArray[Math.floor(Math.random() * iconArray.length - 1 + 1)];
  }

  // MyWork Icon (iconNameRandom)
  iconNameRandom(): string {
    let categoryNameArray: string[] = [
      'frontend', 'backend', 'database', 'mobile', 'desktop',
      'network', 'security', 'game', 'ai', 'machine-learning',
      'devops', 'testing', 'other',
    ];
    return categoryNameArray[
      Math.floor(Math.random() * categoryNameArray.length - 1 + 1)
    ];
  }

  // MyWork Icon (iconColorRandom)
  iconColorRandom(): string {
    let iconNameArray: string[] = [
      'text-primary',
      'text-secondary',
      'text-success',
      'text-warning',
      'text-danger',
      'text-info',
    ];
    return iconNameArray[
      Math.floor(Math.random() * iconNameArray.length - 1 + 1)
    ];
  }

  // My Work
  myWorkFunction(): MyWork[] {
    // let myWorkIconArray:Array<BlogCard> = [];
    let myWorkIconArray: MyWork[] = [];

    for (let i = 1; i <= 6; i++) {
      const randomCategoryName = this.iconNameRandom().toLowerCase();
      myWorkIconArray.push({
        id: i,
        icon: this.myWorkRandomIconFunction() + ' ' + this.iconColorRandom(),
        header: `${randomCategoryName}-${i}`,
        // title:   "Title-"+i,
        text: 'frontend-'
          .concat(String(i))
          .concat(
            randomCategoryName +
              ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptate error tempore officia unde! Ut dignissimos consequatur, minus quasi, suscipit, voluptate corporis debitis ab tempore perferendis alias? Sint, porro aspernatur! Ipsum possimus nobis non perspiciatis nesciunt pariatur quia quos. Vel, ipsa, modi cumque possimus enim provident dolorum perferendis praesentium commodi itaque a dolorem recusandae ea voluptatem odio, esse aliquid nostrum. Molestias cupiditate blanditiis ut sequi velit corporis deserunt reprehenderit a voluptatem accusantium, modi dicta provident iure corrupti hic vitae. Dolorem illo perferendis omnis asperiores dignissimos neque quos, natus repellat voluptatum.'
          ),
      });
    }
    return myWorkIconArray;
  }

  // SECTION About)

  //////////////////////////////////////////////////////////////////////
  // 1.YOL (BLOG CARD)
  /*
  blogCard: any[] = []
  blogCard: BlogCard[] = [
    {
      id: 1,
      header: 'frontend-1',
      title: 'Title-1',
      text: 'frontend-1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptate error tempore officia unde! Ut dignissimos consequatur, minus quasi, suscipit, voluptate corporis debitis ab tempore perferendis alias? Sint, porro aspernatur! Ipsum possimus nobis non perspiciatis nesciunt pariatur quia quos. Vel, ipsa, modi cumque possimus enim provident dolorum perferendis praesentium commodi itaque a dolorem recusandae ea voluptatem odio, esse aliquid nostrum. Molestias cupiditate blanditiis ut sequi velit corporis deserunt reprehenderit a voluptatem accusantium, modi dicta provident iure corrupti hic vitae. Dolorem illo perferendis omnis asperiores dignissimos neque quos, natus repellat voluptatum.',
      description: 'Description-1',
      picture:
        'https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131_1280.jpg',
      date: String(new Date()),
      link: 'blog',
      categoryName: 'frontend',
    },
  ];
  */

  // 2.YOL (BLOG CARD): Döngüsel Object
  blogCard: BlogCard[] = this.blogArrayService.blogCardFunction();

  //////////////////////////////////////////////////////////////////////
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
