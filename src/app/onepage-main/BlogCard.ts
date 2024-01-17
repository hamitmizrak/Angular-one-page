// Blog Card

export class BlogCard {
  // Field
  id: number;
  header:string;
  title: string;
  text: string;
  description: string;
  picture: string;
  date: string;
  link:string;

  // constructor
  constructor(
    id: number,
    header:string,
    title: string,
    text: string,
    description: string,
    picture: string,
    date: string,
    link:string
  ) {
    this.id = id;
    this.header = header;
    this.title = title;
    this.text = text;
    this.description = description;
    this.picture = picture;
    this.date = date;
    this.link=link;
  }

  // method
  // Date : Gün/Ay/Yıl dönderen method yazınız ve bunu date bind ediniz.
}
