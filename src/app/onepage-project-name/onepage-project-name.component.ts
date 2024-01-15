// Import
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  // Html tag
  selector: 'app-onepage-project-name',

  // bu component bağımsız olarak çalışsın
  standalone: true,

  // Modul ekle
  imports: [CommonModule],

  // Html5 Url
  // templateUrl: './onepage-header.component.html',
  template: `
    <div>
      <ul class="list-group list-group-numbered">
        <li class="list-group-item active">{{ projectName }}</li>
        <li class="list-group-item">{{ name }} - {{ surname }}</li>
        <li class="list-group-item">{{ projectAuthor }}</li>
        <li class="list-group-item">{{ projectVersion }}</li>
        <li class="list-group-item">{{ projectYear }}</li>
        <li class="list-group-item">{{ projectKeywords }}</li>
        <li class="list-group-item disabled">Disabled item</li>
      </ul>
    </div>
    <hr />
  `,

  // Css Dosyası
  styleUrl: './onepage-project-name.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

// Export
export class OnepageProjectNameComponent {
  name: string = 'Hamit';
  surname: string = 'Mızrak';
  projectName: String = 'One Page';
  projectVersion: String = 'v1.0.0'; //Semantic Version
  projectDescription: String = 'One Page Project';
  projectAuthor: String = 'Hamit Mızrak';
  projectLicense: String = 'MIT';
  projectRepository: String = '';
  projectKeywords: String = '';
  projectYear: number = 2024;
}
