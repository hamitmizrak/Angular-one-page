// Router Import
import { Routes } from '@angular/router';

// Page
import { OnepageMainComponent } from './onepage-main/onepage-main.component';
import { OnePageBlogDetailsComponent } from './one-page-blog-details/one-page-blog-details.component';
import { OnePageLoginComponent } from './one-page-login/one-page-login.component';
import { OnePageRegisterComponent } from './one-page-register/one-page-register.component';

// Router
export const routes: Routes = [
  // Index (Home Page: Default)
  { path: 'index', component: OnepageMainComponent },
  { path: '', redirectTo: 'index', pathMatch: 'full' },

  // Blog Page
  { path: 'blog', component: OnePageBlogDetailsComponent },

  // Login Page
  { path: 'login/:userId', component: OnePageLoginComponent },

  // Register Page
  { path: 'register', component: OnePageRegisterComponent },
];
