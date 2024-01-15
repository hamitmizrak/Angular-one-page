import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

//import footerDataClass
import { footerDataClass } from './footerDataClass';

@Component({
    // html 
  selector: 'app-onepage-main',

    // component: bağımsız çalışabilsin mi
  standalone: true,

    // modül ekleme
  imports: [CommonModule],

    // Html5 Url
  templateUrl: './onepage-main.component.html',

    // Css3 Url
  styleUrl: './onepage-main.component.css'
})
export class OnepageMainComponent {
   //dizi: Array<number> = [1,2,3,4,5];
   //dizi: Array<any> = [1,2,3,4,5];
   dizi:number[] = [1,2,3,4,5];

   //1 .YOL
   footerData: any[]=[
    {id:1,title:"Title-1",description:"Description-1",link:"Link-1",icon:"Icon-1"},
    {id:2,title:"Title-2",description:"Description-2",link:"Link-2",icon:"Icon-2"},
   ];

   //2.YOL
   footerData2: footerDataClass[]=[
    {id:23,title:"Title-1",description:"Description-1",link:"Link-1",icon:"Icon-1",imageUrl:"resim1.png"},
    {id:44,title:"Title-2",description:"Description-2",link:"Link-2",icon:"Icon-2",imageUrl:"resim2.png"},
   
   ];
}
