import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// Header, Main, Footer
import { OnepageHeaderComponent } from './onepage-header/onepage-header.component';
import { OnepageMainComponent } from './onepage-main/onepage-main.component';
import { OnepageFooterComponent } from './onepage-footer/onepage-footer.component';
import { OnepageProjectNameComponent } from './onepage-project-name/onepage-project-name.component';

// Dikkat: Bütün Componentleri buraya eklemek zorundayız
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    OnepageProjectNameComponent,
    OnepageHeaderComponent, 
    OnepageMainComponent, 
    OnepageFooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name="Hamit";
  surname="Mızrak";
  projectName = 'One Page';
}
