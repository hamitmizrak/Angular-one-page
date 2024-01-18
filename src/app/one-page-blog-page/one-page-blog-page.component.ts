// Common Module
import { CommonModule } from '@angular/common';

// Component Core
import { Component } from '@angular/core';

// Router Link
import { RouterLink } from '@angular/router';

@Component({
   // Html Selector Template
  selector: 'app-one-page-blog-page',

   // Bu component tek başına çalışsın
  standalone: true,
  
  // import modülümüz
  imports: [CommonModule,RouterLink],

  // Html Url
  templateUrl: './one-page-blog-page.component.html',

  // Css Url
  styleUrl: './one-page-blog-page.component.css'
})
// EXPORT
export class OnePageBlogPageComponent {

// Field

  // Constructor
  constructor(){}

  // Method

} //end OnePageBlogPageComponent
