# RXJS 
- RxJS: (Reactive eXtensions for JavaScript)
- RxJS: Bir JavaScript kütüphanesidir.
- RxJS: Tasarım desenidir (Desing Pattern)
- RxJS: Javascript asenkron programlamada etkin ve düzenli hale getirir.
- RxJS: Observable (Gözlemlebilinirlik)
- RxJS: Observer   (Gözlemleyici)
- RxJS: Operator   (İşlemci=Manipulation: map, filter,merge)
- RxJS: Observable RxJS temel yapı taşıdır.
- RxJS: Observable: Veri akışının değerini düzenleyen bir düz bir çizgidir (pipe)
- RxJS: Observable bir nesnedir.
- RxJS: Observable subscribe (abone olma)
- RxJS: Angular RxJS'i çok kullanır. 
- RxJS: Http 
  
import {Observable} from 'rxjs/operators';
- RxJS: pipe(map())    => her bir nesnenin alt itemlara erişmek
- RxJS: pipe(filter()) => İstediklerimiz gelsin
- RxJS: pipe(tap())    => loglama, debugging
- RxJS: pipe(catchError())    => Hata yakalama
- RxJS: pipe(debounceTime(300))    => Observabledan geleni bekleme süresi
  deneme.pipe(
    debounceTime(300), // Kullanıcıyı Bekleme Süreci
    filter(data=> data%2==0),
    map(data=>data+1000)
    distinctUntilChanged(), // Aynı değerler varsa tek haneye indirsin
    catchError(err=>{ // Hata meydana gelirse
        logger.error(err);
        return of([]); // Hata olursa boş bir değer gönder
    })
  )(observable);

import {Observable} from 'rxjs';
// Observable Instance
const dearMyObservable == new Observable(observer=>{
    observer.next("1.data");
    observer.next("2.data");
    observer.next("3.data");
    observer.complete();
})

// Observable subscribe(Abone olun)
const subscription= dearMyObservable.subscribe({
    next: value=> console.log(value),
    complete: ()=> console.log("Completed)
}

