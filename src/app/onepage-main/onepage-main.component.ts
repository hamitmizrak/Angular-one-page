
// Common Module
import { CommonModule } from '@angular/common';

// Component Core
import { Component } from '@angular/core';

// BlogCard Ekledim
import { BlogCard } from './BlogCard';
import { OnePageContent } from './OnePageContent';
import { BusinessCard } from './BusinessCard';

// Declare
declare let alertify:any;

@Component({
  // html Template
  selector: 'app-onepage-main',

  // Bu component tek başına çalışsın
  standalone: true,

  // import modülümüz
  imports: [CommonModule],

  // Html Url
  templateUrl: './onepage-main.component.html',

  // Css Url
  styleUrl: './onepage-main.component.css',
})
export class OnepageMainComponent {
  // Field

  // Section Title
  onePageContent:OnePageContent[]=[
    {id:1,title:"my work"},
    {id:2,title:"about"},
    {id:3,title:"blog"},
    {id:4,title:"contact"},
  ];

  // My Work
  businessCard: BusinessCard[] = [
    {
      id: 1,
      title: 'Frontend',
      text: 'Frontend Loremsed Nam Excepturi At Voluptatem, Unde, Atque Sunt Expedita Fuga Recusandae Facere Provident, Illo Quibusdam Nihil Quod Culpa Deserunt Quos A Reprehenderit Est Sequi Blanditiis Dolorum? Sed!',
      description: 'Description-1',
      icon:'fa-solid fa-bolt text-primary',
      date: String(new Date().getFullYear()),
      link: 'https://deneme1/',
    },
    {
      id: 2,
      title: 'Backend',
      text: 'Frontend Loremsed Nam Excepturi At Voluptatem, Unde, Atque Sunt Expedita Fuga Recusandae Facere Provident, Illo Quibusdam Nihil Quod Culpa Deserunt Quos A Reprehenderit Est Sequi Blanditiis Dolorum? Sed!',
      description: 'Description-1',
      icon:'fa-solid fa-mug-hot text-danger',
      date: String(new Date().getFullYear()),
      link: 'https://deneme1/',
    },
    {
      id: 3,
      title: 'Database',
      text: 'Frontend Loremsed Nam Excepturi At Voluptatem, Unde, Atque Sunt Expedita Fuga Recusandae Facere Provident, Illo Quibusdam Nihil Quod Culpa Deserunt Quos A Reprehenderit Est Sequi Blanditiis Dolorum? Sed!',
      description: 'Description-1',
      icon:'fa-solid fa-pencil',
      date: String(new Date().getFullYear()),
      link: 'https://deneme1/',
    },
    {
      id: 4,
      title: 'Frontend',
      text: 'Frontend Loremsed Nam Excepturi At Voluptatem, Unde, Atque Sunt Expedita Fuga Recusandae Facere Provident, Illo Quibusdam Nihil Quod Culpa Deserunt Quos A Reprehenderit Est Sequi Blanditiis Dolorum? Sed!',
      description: 'Description-1',
      icon:'fa-solid fa-bolt text-primary',
      date: String(new Date().getFullYear()),
      link: 'https://deneme1/',
    },
    {
      id: 5,
      title: 'Frontend',
      text: 'Frontend Loremsed Nam Excepturi At Voluptatem, Unde, Atque Sunt Expedita Fuga Recusandae Facere Provident, Illo Quibusdam Nihil Quod Culpa Deserunt Quos A Reprehenderit Est Sequi Blanditiis Dolorum? Sed!',
      description: 'Description-1',
      icon:'fa-solid fa-bolt text-primary',
      date: String(new Date().getFullYear()),
      link: 'https://deneme1/',
    },
    {
      id: 6,
      title: 'Frontend',
      text: 'Frontend Loremsed Nam Excepturi At Voluptatem, Unde, Atque Sunt Expedita Fuga Recusandae Facere Provident, Illo Quibusdam Nihil Quod Culpa Deserunt Quos A Reprehenderit Est Sequi Blanditiis Dolorum? Sed!',
      description: 'Description-1',
      icon:'fa-solid fa-bolt text-primary',
      date: String(new Date().getFullYear()),
      link: 'https://deneme1/',
    },
  ]
// My Work Link
  businessLink(temp:any){
    // if(window.confirm("Gitmek istiyor musunuz")){
    //   window.location.href="https://www.google.com";
    // }else{
    //   alert("Gitmek istemediniz");
    // }
    // alert(temp.id)

    // Alertifyjs 
    //alertify.success("Success")
    alertify.success("deneme")
    alertify.warning("deneme")
    alertify.message("deneme")
    alertify.error("deneme")
  }

  // 1.YOL
  // blogCard: any[] = [
  // 2.YOL (Mock Api)
  blogCard: BlogCard[] = [
    {
      id: 1,
      title: 'Blog Frontend Kullanımı',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, incidunt? Magnam quas optio sit expedita pariatur repudiandae recusandae porro cumque delectus laudantium quis, fugiat, deleniti praesentium beatae officia consequatur architecto? Nesciunt reiciendis culpa in sunt laudantium ipsum fugiat non sed asperiores atque eveniet illum, natus provident placeat veniam? Nesciunt reiciendis mollitia iusto ea excepturi quas, minima consequuntur aliquam repudiandae omnis? Dicta, placeat. Placeat, eius alias. Aspernatur eius harum expedita officia molestias explicabo iure, quos earum asperiores velit incidunt nostrum exercitationem nobis perferendis ipsum quidem eaque nam est nemo repellat unde.',
      description: 'Description-1',
      picture:
        'https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131_1280.jpg',
        date: String(new Date()),
        link: 'https://deneme1/',
    },
    {
      id: 2,
      title: 'Blog Backend Kullanımı',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, incidunt? Magnam quas optio sit expedita pariatur repudiandae recusandae porro cumque delectus laudantium quis, fugiat, deleniti praesentium beatae officia consequatur architecto? Nesciunt reiciendis culpa in sunt laudantium ipsum fugiat non sed asperiores atque eveniet illum, natus provident placeat veniam? Nesciunt reiciendis mollitia iusto ea excepturi quas, minima consequuntur aliquam repudiandae omnis? Dicta, placeat. Placeat, eius alias. Aspernatur eius harum expedita officia molestias explicabo iure, quos earum asperiores velit incidunt nostrum exercitationem nobis perferendis ipsum quidem eaque nam est nemo repellat unde.',
      description: 'Description-2',
      picture:
        'https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131_1280.jpg',
        date: String(new Date()),
        link: 'https://deneme2/',
      }
    ,
    {
      id: 3,
      title: 'Blog Database Kullanımı',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, incidunt? Magnam quas optio sit expedita pariatur repudiandae recusandae porro cumque delectus laudantium quis, fugiat, deleniti praesentium beatae officia consequatur architecto? Nesciunt reiciendis culpa in sunt laudantium ipsum fugiat non sed asperiores atque eveniet illum, natus provident placeat veniam? Nesciunt reiciendis mollitia iusto ea excepturi quas, minima consequuntur aliquam repudiandae omnis? Dicta, placeat. Placeat, eius alias. Aspernatur eius harum expedita officia molestias explicabo iure, quos earum asperiores velit incidunt nostrum exercitationem nobis perferendis ipsum quidem eaque nam est nemo repellat unde.',
      description: 'Description-3',
      picture:
        'https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131_1280.jpg',
        date: String(new Date()),
        link: 'https://deneme3/',
      },
    {
      id: 4,
      title: 'Blog Webservices Kullanımı',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, incidunt? Magnam quas optio sit expedita pariatur repudiandae recusandae porro cumque delectus laudantium quis, fugiat, deleniti praesentium beatae officia consequatur architecto? Nesciunt reiciendis culpa in sunt laudantium ipsum fugiat non sed asperiores atque eveniet illum, natus provident placeat veniam? Nesciunt reiciendis mollitia iusto ea excepturi quas, minima consequuntur aliquam repudiandae omnis? Dicta, placeat. Placeat, eius alias. Aspernatur eius harum expedita officia molestias explicabo iure, quos earum asperiores velit incidunt nostrum exercitationem nobis perferendis ipsum quidem eaque nam est nemo repellat unde.',
      description: 'Description-4',
      picture:
        'https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131_1280.jpg',
        date: String(new Date()),
        link: 'https://deneme4/',
      },
    {
      id: 5,
      title: 'Blog Frontend Kullanımı',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, incidunt? Magnam quas optio sit expedita pariatur repudiandae recusandae porro cumque delectus laudantium quis, fugiat, deleniti praesentium beatae officia consequatur architecto? Nesciunt reiciendis culpa in sunt laudantium ipsum fugiat non sed asperiores atque eveniet illum, natus provident placeat veniam? Nesciunt reiciendis mollitia iusto ea excepturi quas, minima consequuntur aliquam repudiandae omnis? Dicta, placeat. Placeat, eius alias. Aspernatur eius harum expedita officia molestias explicabo iure, quos earum asperiores velit incidunt nostrum exercitationem nobis perferendis ipsum quidem eaque nam est nemo repellat unde.',
      description: 'Description-5',
      picture:
        'https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131_1280.jpg',
        date: String(new Date()),
        link: 'https://deneme5/',
      },
    {
      id: 6,
      title: 'Blog Frontend Kullanımı',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, incidunt? Magnam quas optio sit expedita pariatur repudiandae recusandae porro cumque delectus laudantium quis, fugiat, deleniti praesentium beatae officia consequatur architecto? Nesciunt reiciendis culpa in sunt laudantium ipsum fugiat non sed asperiores atque eveniet illum, natus provident placeat veniam? Nesciunt reiciendis mollitia iusto ea excepturi quas, minima consequuntur aliquam repudiandae omnis? Dicta, placeat. Placeat, eius alias. Aspernatur eius harum expedita officia molestias explicabo iure, quos earum asperiores velit incidunt nostrum exercitationem nobis perferendis ipsum quidem eaque nam est nemo repellat unde.',
      description: 'Description-6',
      picture:
        'https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131_1280.jpg',
        date: String(new Date()),
        link: 'https://deneme6/',
      },
  ];
  //Method
}
