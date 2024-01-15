import { Component } from '@angular/core';

@Component({
  selector: 'app-onepage-footer',
  standalone: true,
  imports: [],
  templateUrl: './onepage-footer.component.html',
  styleUrl: './onepage-footer.component.css',
})
export class OnepageFooterComponent {

  // Field

  // Constructor
  constructor(){
    console.log('One page Footer Component');
  }

  // Method
  newDateData():string{
    return String(new Date().getFullYear()) ;
  }



}
