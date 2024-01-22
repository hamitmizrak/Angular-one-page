// Router Import
import { Routes } from '@angular/router';

// Page
import { OnepageMainComponent } from './onepage-main/onepage-main.component';
import { OnePageBlogPageComponent } from './one-page-blog-page/one-page-blog-page.component';
import { OnePageLoginComponent } from './one-page-login/one-page-login.component';
import { OnePageRegisterComponent } from './one-page-register/one-page-register.component';

// Router
export const routes: Routes = [
  // Index (Home Page: Default)
  { path: 'index', component: OnepageMainComponent },
  { path: '', redirectTo: 'index', pathMatch: 'full' },

  // Blog Page
  { path: 'blog', component: OnePageBlogPageComponent },

  // Login Page
  { path: 'login', component: OnePageLoginComponent },

  // Register Page
  { path: 'register', component: OnePageRegisterComponent },
];
