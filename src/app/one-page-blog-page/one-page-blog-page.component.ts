// Common Module
import { CommonModule } from '@angular/common';

// Component Core
import { Component, OnInit } from '@angular/core';

// Router Link
import { RouterLink } from '@angular/router';

// Blog Card
import { BlogCard } from '../onepage-main/BlogCard';

// Custom Pipeline
import { SearchBlogFilterPipe } from '../custom-pipe/search-blog-filter.pipe';

// Two way Data Bind (ng Model)
import { FormsModule } from '@angular/forms';

// BlogArrayService
import { BlogArrayService } from '../services/blog-array.service';

@Component({
   // Html Selector Template
  selector: 'app-one-page-blog-page',

   // Bu component tek başına çalışsın
  standalone: true,
  
  // import modülümüz
  imports: [CommonModule,RouterLink,SearchBlogFilterPipe,FormsModule],

  // Html Url
  templateUrl: './one-page-blog-page.component.html',

  // Css Url
  styleUrl: './one-page-blog-page.component.css',

  // Local Service İçin
  providers: [BlogArrayService]
})
// EXPORT
export class OnePageBlogPageComponent implements OnInit {

// Field
// dataFilterBlogCategory="frontend-1";
dataFilterBlogCategory="";


  // Constructor
  constructor(
    private blogArrayService:BlogArrayService,
  ){}

  // ngOnInit
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

 // BlogCard
 // 1.YOL (Manuel)
 /*
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
      categoryName:"frontend"
    }
  ];
  */

  // 2.YOL (BLOG CARD): Döngüsel Object
  blogCard: BlogCard[] =this.blogArrayService.blogCardFunction();

  // Method
    //Method
    detailPage() {
      alert('Detail Page');
      if (window.confirm('Detail sayfasına gitmek mi istiyorsunuz')) {
        window.location.href = 'blog';
      } else {
        alert('Blog Detail Gidilmedi');
      }
    } //end detailPage

} //end OnePageBlogPageComponent
