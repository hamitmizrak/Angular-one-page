// ENUM
export enum userRolles {
  admin = 'ADMIN',
  writer = 'WRITER',
  user = 'USER',
}

// ABSTRACT
abstract class Person {
  //Field
  id: number;
  username: string;
  email: string;
  password: string;
  pictures: string;
  date: string;
  link: string;

  //Constructor
  constructor(
    id: number,
    username: string,
    email: string,
    password: string,
    pictures: string,
    date: string,
    link: string
  ) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.pictures = pictures;
    this.date = date;
    this.link = link;
  }

  //Method (Gövdeli)
//   personInformation():void{
//     console.log("Gövdeli method");
//   }
  //Method (Gövdesiz)
} //end abstract

// INTERFACE

// User
export class User extends Person {
  // Field
  // rolles:Array<any>;
  rolles: string;

  // Constructor
  constructor(
    id: number,
    username: string,
    email: string,
    password: string,
    pictures: string,
    date: string,
    link: string,
    rolles: string
  ) {
    super(id,username,email,password,pictures,date,link); // abstract'ten gelen
    this.rolles = rolles;
  }
  // Method
}

// Person nesnesinden abstract
// TypeScript Enum
