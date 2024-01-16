import { Routes } from '@angular/router';
import { OnepageMainComponent } from './onepage-main/onepage-main.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';

// Router
export const routes: Routes = [
    
    // Index
    {path:  'index', component:OnepageMainComponent},
    {path:'',redirectTo: 'index',pathMatch:'full'}, // default redirect

    {path:'about', title:"About Page",  component: AboutComponent},
    {path:'login', title:"Login Page",  component: LoginComponent},
    {path:'register', title:"About Page",  component: LoginComponent},
];
