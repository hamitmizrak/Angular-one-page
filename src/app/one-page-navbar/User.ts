// ng g e userRolles
// ENUM
export enum userRolles {
  admin = 'ADMIN',
  writer = 'WRITER',
  user = 'USER',
}

// INTERFACE 
// ng g i IU => interface 
export interface IUser {
  name: string;
  surname: string;
  username: string;
  email: string;
  password: string;
}


// ABSTRACT
abstract class Person implements IUser {
  // Field (Common Field)
  id: number;
  pictures: string;
  date: string;
  link: string;

  // Field Interface (Interface Field)
  name: string;
  surname: string;
  username: string;
  email: string;
  password: string;

  //Constructor
  constructor(
    id: number,
    name: string,
    surname: string,
    username: string,
    email: string,
    password: string,
    pictures: string,
    link: string,
    date: string,
  ) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.surname = surname;
    this.email = email;
    this.password = password;
    this.pictures = pictures;
    this.link = link;
    this.date = date;
  }

// Method (Gövdeli)
//   personInformation():void{
//     console.log("Gövdeli method");
//   }

  //Method (Gövdesiz)
} //end abstract

// User (Extends)
export class User extends Person {
  // Field
  // rolles:Array<any>;
  rolles: string;

  // Constructor
  constructor(
    id: number,
    name: string,
    surname: string,
    username: string,
    email: string,
    password: string,
    pictures: string,
    link: string,
    date: string,
    rolles: string
  ) {
    super(id,name,surname,username,email,password,pictures,link,date); // abstract'ten gelen
    this.rolles = rolles;
  }
  // Method
}
