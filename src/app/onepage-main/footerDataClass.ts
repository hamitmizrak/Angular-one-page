/*

  FooterData: any[]=[
    {id:1,title:"Title-1",description:"Description-1",link:"Link-1",icon:"Icon-1"},
    {id:2,title:"Title-2",description:"Description-2",link:"Link-2",icon:"Icon-2"},
   ];

*/

export class footerDataClass{

  // FIELD DATA
    id:number;
    title:string;
    description:string;
    link:string;
    icon:string;
    imageUrl:string;


    // CONSTRUCTOR DATA
    constructor(id:number,title:string,description:string,link:string,icon:string,imageUrl:string){
      this.id = id;
      this.title = title;
      this.description = description;
      this.link = link;
      this.icon = icon;
      this.imageUrl = imageUrl;
    }

}