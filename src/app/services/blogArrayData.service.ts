// Service için
import { Injectable, OnInit } from '@angular/core';
import { BlogCard } from '../onepage-main/BlogCard';

// app.component.ts içine önceden HttpClientModule yüklemiştim.
// ancak buraya HttpClient eklenir.
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';

//@Injectable({providedIn: 'root'}) // => Global Servis için kullanılır.
@Injectable() // Local Servis içi kullanılır.
export class BlogArrayDataService implements OnInit {
  // Field

  // Method
  // Random Category
  blogCategoryRandom(): string {
    let categoryArray: string[] = [
      'frontend',
      'backend',
      'fullstack',
      'database',
      'devops',
      'mobile',
      'game',
      'other',
    ];
    return categoryArray[
      Math.floor(Math.random() * categoryArray.length - 1 + 1)
    ];
  }

  // BlogCard
  // 1.YOL
  blogCardFunction(): BlogCard[] {
    //let blogCard1: Array<BlogCard> = [];
    let blogCard2: BlogCard[] = [];
    for (let i = 1; i <= 15; i++) {
      const data = this.blogCategoryRandom().toLowerCase();
      blogCard2.push({
        id: i,
        header: data,
        title: 'Title-' + i,
        text: data
          .concat(String(i))
          .concat(
            ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptate error tempore officia unde! Ut dignissimos consequatur, minus quasi, suscipit, voluptate corporis debitis ab tempore perferendis alias? Sint, porro aspernatur! Ipsum possimus nobis non perspiciatis nesciunt pariatur quia quos. Vel, ipsa, modi cumque possimus enim provident dolorum perferendis praesentium commodi itaque a dolorem recusandae ea voluptatem odio, esse aliquid nostrum. Molestias cupiditate blanditiis ut sequi velit corporis deserunt reprehenderit a voluptatem accusantium, modi dicta provident iure corrupti hic vitae. Dolorem illo perferendis omnis asperiores dignissimos neque quos, natus repellat voluptatum.'
          ),
        description: 'Description-' + i,
        picture:
          'https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131_1280.jpg',
        date: String(new Date()),
        link: 'blog' + i,
        categoryName: data,
      }); //end push
    } //end for
    return blogCard2;
  }

  // BlogCard
  blogCard: BlogCard[] = this.blogCardFunction();

  // Constructor
  constructor(private httpClient: HttpClient) {}

  // 2.YOL (json-serverdan gelen api isteğini kullanmak)
  blogCard2: BlogCard[] = new Array<BlogCard>();

  // HttpClientModule Api'den gelen istekleri almak için kullanılır.
  ngOnInit(): void {
    // this.httpClient.post();
    // this.httpClient.delete();
    // this.httpClient.put();
    // 2.YOL DEVAM
    // this.httpClient
    //   .get<BlogCard[]>('http://localhost:4444/blog')
    //   .subscribe((response) => {
    //     this.blogCard2 = response;
    //   });
  }

  // 3.YOL
  path: string = "http://localhost:4444/blog'";
  // Observable: Aslında bir design patterndir.
  getObservableBlogCard(): Observable<BlogCard[]> {
    return (
      this.httpClient
        .get<BlogCard[]>(this.path)
        // hata yakalamak için sadece blogCard değil başkalarıda Observable çalışsın
        .pipe(
          tap(
            (response) => console.log(JSON.stringify(response))
            //response=>console.log("OK", response)
          ),
          catchError(this.observableHandlingError)
        )
    );
  }

  // rxjs Hata olursa yakalamak için
  observableHandlingError(err: HttpErrorResponse) {
    //throw new Error('Method not implemented.');
    let dataError = '';
    if (err.error instanceof ErrorEvent) {
      dataError = 'Bir hatamız var.' + err.error.message;
    } else {
      dataError = 'Apiden istek gelmiyor json-server kapatmış olabilir misin';
    }
    //rxjs throwError
    return throwError(dataError);
  }

  // Hata Yakalamak için
} //end BlogArrayDataService
