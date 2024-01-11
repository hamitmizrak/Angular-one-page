import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-onepage-project-name',
  standalone: true,
  imports: [CommonModule],
  // Html5 Url
  // templateUrl: './onepage-header.component.html',
  template: `
    <div>
      <!-- one way data binding -->
      Project Name: <span class="text-primary">One Pages</span>
      <br />
      Merhabalar <span class="text-primary">Hamit - Mızrak</span>
    </div>
    <hr />
  `,
  styleUrl: './onepage-project-name.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnepageProjectNameComponent {
  name:string = 'Hamit';
  surname:string = 'Mızrak';
  projectName:String = 'One Page';
  projectVersion:String = 'v1.0.0'; //Semantic Version
  projectDescription:String = 'One Page Project';
  projectAuthor:String = 'Hamit Mızrak';
  projectLicense:String = 'MIT';
  projectRepository:String = '';
  projectKeywords:String = '';
  projectYear:number =2024;
}
