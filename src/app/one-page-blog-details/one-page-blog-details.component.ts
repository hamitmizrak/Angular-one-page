// Common Module
import { CommonModule } from '@angular/common';

// Component Core
import { Component, OnInit } from '@angular/core';

// Router Link
import { RouterLink } from '@angular/router';

// Blog Card
import { BlogCard } from '../onepage-main/BlogCard';

// Custom Pipeline
import { SearchBlogFilterPipe } from '../custom-pipeline/search-blog-filter.pipe';

// Two way Data Bind (ng Model)
import { FormsModule } from '@angular/forms';

// Global Services (Alertify Servicesi  kullanmak istiyorsak buraya eklemeliyiz.)
import { AlertifyMessageService } from '../services/alertifyMessage.service';

// Local Services (BlogArrayDataService)
import { BlogArrayDataService } from '../services/blogArrayData.service';

@Component({
  // Html Selector Template
  selector: 'app-one-page-blog-page',

  // Bu component tek başına çalışsın
  standalone: true,

  // import modülümüz
  // FormsModule :ngModule için (Two way data binding)
  imports: [CommonModule, RouterLink, SearchBlogFilterPipe, FormsModule],

  // Html Url
  templateUrl: './one-page-blog-details.component.html',

  // Css Url
  styleUrl: './one-page-blog-details.component.css',

  // Local Service için
  // bunun anlamı localService çağırmak içindir.
  // örneğin AlertifyMessage global yerine local yapabilirsin.
  // Local Service (BlogCard)
  providers: [BlogArrayDataService],
})

// EXPORT
export class OnePageBlogDetailsComponent implements OnInit {
  // Field
  // dataFilterBlogCategory="frontend-1";
  dataFilterBlogCategory = '';

  // Constructor (Service kullanabilmek için @Injection eklemeyiz.)
  // Dependency Injection: private alertifyMessageService: AlertifyMessageService demektir.
  // NOT: Global veya Local Serviste DI(Dependency Injection) eklemeliyiz.
  constructor(
    private alertifyMessageService: AlertifyMessageService,
    private blogArrayDataService: BlogArrayDataService
  ) {}



  // BlogCard (Local Service Aldım)
  // 1.YOL (Manuel oluşturulmuş BlogCard)
  // blogCard: BlogCard[] = this.blogArrayDataService.blogCard;

  // 2.YOL (json-server ile oluşturulmuş blogCard bir datayı Api isteği ilealdım.)
  //blogCard: BlogCard[] = this.blogArrayDataService.blogCard2;


  // 3.YOL (Observable blogCard)
  blogCard: BlogCard[] = new Array<BlogCard>();
  // ngOnInit: Constructor sonrasında çalışır
  // ngOnInit
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this.alertifyMessageService.alertMessage('Detail Page Hoşgeldiniz.');

    // 3.Yol olarak Observable blogCard çağırmak
    this.blogArrayDataService.getObservableBlogCard().subscribe(response=>
      this.blogCard = response
      );
  }

  // Method
  //Method
  detailPage() {
    if (window.confirm('Detail sayfasına gitmek mi istiyorsunuz')) {
      //alert('Detail Page Gidiliyor');
      window.location.href = 'blog';
    } else {
      alert('Blog Detail Gidilmedi');
    }
  } //end detailPage
} //end OnePageBlogDetailsComponent
