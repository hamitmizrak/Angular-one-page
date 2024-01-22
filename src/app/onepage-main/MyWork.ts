// IMyWork
export interface IMyWork{
  icon:string;
  header:string;
  text:string;
}

// Class (MyWork)
export class MyWork implements IMyWork{
  // Field (Interface)
  icon: string;
  header: string;
  text: string;

  // Field Other
  id:number;

  // constructor
  constructor(
    id:number,
    icon: string,
    header: string,
    text: string,
  ) {
   this.id = id;
    this.icon = icon;
    this.header = header;
    this.text = text;
  }
  

} //end Class MyWork