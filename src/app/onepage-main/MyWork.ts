// MyWork Interface
// NOT: Interface'de buradaki alanlar zorunludur. implements ettiğin yerde eklemelisin
export interface IMyWork {
  icon: string;
  header: string;
  title: string;
}

// MyWork Class
export class MyWork implements IMyWork {
  // Field
  // Access Modifier
  id: number;
  icon: string;
  header: string;
  title: string;

  // constructor
  constructor(id:number, icon: string, header: string, title: string) {
    this.id = id;
    this.icon = icon;
    this.header = header;
    this.title = title;
  }

  // method
} //end class MyWork
