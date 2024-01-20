// ENUM
export enum userRolles {
  admin = 'ADMIN',
  writer = 'WRITER',
  user = 'USER',
}

// User Interface
// NOT: Interface'de buradaki alanlar zorunludur. implements ettiğin yerde eklemelisin
export interface IUser {
  name: string;
  surname: string;
  username: string;
  email: string;
  password: string;
}

// ABSTRACT
export abstract class Person implements IUser {
  //Field
  id: number;
  name: string;
  surname: string;
  username: string;
  email: string;
  password: string;
  pictures: string;
  date: string;
  link: string;

  //Constructor
  constructor(
    id: number,
    name: string,
    surname: string,
    username: string,
    email: string,
    password: string,
    pictures: string,
    date: string,
    link: string
  ) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.username = username;
    this.email = email;
    this.password = password;
    this.pictures = pictures;
    this.date = date;
    this.link = link;
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
    date: string,
    link: string,
    rolles: string
  ) {
    super(id, name, surname, username, email, password, pictures, date, link); // abstract'ten gelen
    this.rolles = rolles;
  }
  // Method

  // Rol Dizisi

}

// INTERFACE
