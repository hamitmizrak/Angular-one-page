// CORE
import { Injectable } from '@angular/core';

// Blog Card
import { BlogCard } from '../onepage-main/BlogCard';


// Global State veya Local Service State için yazmalısınız
// @Injectable({
//   providedIn: 'root' //providedIn: Kaldırırsam Local Service olacaktır.
// })

// LOCAL SERVICE (providedIn yazılmaz)
@Injectable()

// EXPORT
export class BlogArrayService {

  // Constructor
  constructor() { }

  // Blog Card 
  // 1.YOL ( blogCard: Manuel)
  /* 
  blogCard: Manuel Oluşturdum
  blogCard: BlogCard[] = [
    {
      id: 1,
      header: 'frontend-1',
      title: 'Title-1',
      text: 'frontend-1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptate error tempore officia unde! Ut dignissimos consequatur, minus quasi, suscipit, voluptate corporis debitis ab tempore perferendis alias? Sint, porro aspernatur! Ipsum possimus nobis non perspiciatis nesciunt pariatur quia quos. Vel, ipsa, modi cumque possimus enim provident dolorum perferendis praesentium commodi itaque a dolorem recusandae ea voluptatem odio, esse aliquid nostrum. Molestias cupiditate blanditiis ut sequi velit corporis deserunt reprehenderit a voluptatem accusantium, modi dicta provident iure corrupti hic vitae. Dolorem illo perferendis omnis asperiores dignissimos neque quos, natus repellat voluptatum.',
      description: 'Description-1',
      picture:
        'https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131_1280.jpg',
      date: String(new Date()),
      link: 'blog',
      categoryName:"frontend"
    }
  ];
  */

  // Blog Card 
  // 2.YOL ( blogCard: Döngüsel Manuel)
  // Random Category Name
  blogCategoryNameRandom():string{
    let categoryNameArray:string[] = [
      'frontend',
      'backend',
      'database',
      'mobile',
      'desktop',
      'network',
      'security',
      'game',
      'ai',
      'machine-learning',
      'devops',
      'testing',
      'other',
    ];
    return (categoryNameArray[Math.floor(Math.random()*categoryNameArray.length-1+1)]);
  }

  // blogCard
  blogCardFunction():BlogCard[]{
    // let blogCardArray:Array<BlogCard> = [];
    let blogCardArray:BlogCard[] = [];

    for(let i=1; i<=15; i++) {
      const randomCategoryName=this.blogCategoryNameRandom().toLowerCase();
      blogCardArray.push(
        {
          id: i,
          header: `${randomCategoryName}-${i}`,
          // title:   "Title-"+i,
          title: `Title: ${randomCategoryName}-${i}`,
          text:  'frontend-'.concat(String(i)).concat( randomCategoryName+' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptate error tempore officia unde! Ut dignissimos consequatur, minus quasi, suscipit, voluptate corporis debitis ab tempore perferendis alias? Sint, porro aspernatur! Ipsum possimus nobis non perspiciatis nesciunt pariatur quia quos. Vel, ipsa, modi cumque possimus enim provident dolorum perferendis praesentium commodi itaque a dolorem recusandae ea voluptatem odio, esse aliquid nostrum. Molestias cupiditate blanditiis ut sequi velit corporis deserunt reprehenderit a voluptatem accusantium, modi dicta provident iure corrupti hic vitae. Dolorem illo perferendis omnis asperiores dignissimos neque quos, natus repellat voluptatum.'),
          description:`Description-${i} ${randomCategoryName}`,
          picture:
            'https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131_1280.jpg',
          date: String(new Date()),
          link: '/blog/'+i,
          categoryName:randomCategoryName
        }
      );
    }

      // Blog Card 
  // 3.YOL ( blogCard: Json-server): Api isteklerin

    return blogCardArray;
  }

} //end BlogArrayService
