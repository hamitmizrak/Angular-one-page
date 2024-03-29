// CORE
import { Component } from '@angular/core';

// COMMON
import { CommonModule } from '@angular/common';

// ROUTER
import { RouterOutlet } from '@angular/router';

// Header, Main, Footer
import { OnepageHeaderComponent } from './onepage-header/onepage-header.component';
import { OnepageMainComponent } from './onepage-main/onepage-main.component';
import { OnepageFooterComponent } from './onepage-footer/onepage-footer.component';
import { OnepageProjectNameComponent } from './onepage-project-name/onepage-project-name.component';
import { OnePageNavbarComponent } from './one-page-navbar/one-page-navbar.component';

// API GET/POST/PUT/DELETE
import { HttpClientModule } from '@angular/common/http';

// SERVICE (AlertifyMessageService)
import { AlertifyMessageService } from './services/alertify-message.service';

// SERVICE (UserRegisterService)
import { UserRegisterService } from './services/user-register.service';

// Dikkat: Bütün Componentleri buraya eklemek zorundayız
@Component({
  // Html tag'i oluşturmak
  selector: 'app-root',

  // Bu componentin tek başına kullanmamıza olanak sağlar
  standalone: true,

  // Eğer Component veya Module ekliyorsanız burada olmak zorundadır.
  imports: [
    CommonModule, 
    RouterOutlet, 
    OnepageProjectNameComponent,
    OnepageHeaderComponent, 
    OnepageMainComponent, 
    OnepageFooterComponent,
    OnePageNavbarComponent,
    HttpClientModule, // Api istekleri icin
  ],

  // Global Servis Olması için Yazdim
  providers:[AlertifyMessageService,UserRegisterService],

  // Html'de bu componentte kullanacağımız html dosyası
  // template:  Html kullanmadan direk html kodlarını template:``
  templateUrl: './app.component.html',

  // Css'de bu componentte kullanacağımız css dosyası
  styleUrl: './app.component.css'
})

// EXPORT: bu classı dışarda çağırmak istiyorsak
export class AppComponent {
  // TS(TypeScript kodlarını buraya yazabiliriz)
  name="Hamit";
  surname="Mızrak";
  projectName = 'One Page';
}
