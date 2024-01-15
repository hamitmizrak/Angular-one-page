## Angular CLI Hazır Bileşenler
> ng g component      onepage-header
> ng g component      onepage-main
> ng g component      onepage-footer
> ng g c              onepage-navbar


## AppComponent (Component Eklemek)
```sh
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// Header, Main, Footer
import { OnepageHeaderComponent } from './onepage-header/onepage-header.component';
import { OnepageMainComponent } from './onepage-main/onepage-main.component';
import { OnepageFooterComponent } from './onepage-footer/onepage-footer.component';

// Dikkat: Bütün Componentleri buraya eklemek zorundayız
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    OnepageHeaderComponent, 
    OnepageMainComponent, 
    OnepageFooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'one-page';
}
```

## Header Component
ng generate component one-page-header (Class: OnepageHeaderComponent)

## Main Component
ng generate component one-page-main (Class: OnepageMainComponent)

## Footer Component
ng g component one-page-footer (Class: OnepageFooterComponent)

## nfIf 
- Karar mekanizması

## ngFor
-- Döngü mekanizması