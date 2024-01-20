import { Injectable } from '@angular/core';

// Global Service: Her yerden erişimi sağlıyor. ancak her servise global yapma ram dolar.

//Declare Alertify
declare let alertify: any;

// @Injectable: Service için bu anotation eklenmelidir.
// 1.YOL
//buradaki providedIn: Global State olması içindir Eğer bunu kaldırırsak Local service olur
@Injectable({
  providedIn: 'root', //buradaki providedIn: Global State olması içindir Eğer bunu kaldırırsak Local service olur.
})
// 2.YOL
/* Eğer istersen: @Injectable() yapıp => app.module.ts içine
   Buradaki Global olmasını istiyorsak buraya ekliyoruz.
   Öreğin: AlertifyMessageService : Global service olması için ekleyebiliriz.
  providers: [AlertifyMessageService],
*/
export class AlertifyMessageService {
  // Constructor
  constructor() {}

  // Succcess
  alertSuccess(message: string) {
    alertify.success(message);
  }

  // Warning
  alertWarning(message: string) {
    alertify.warning(message);
  }

  // Message
  alertMessage(message: string) {
    alertify.message(message);
  }

  // Error
  alertError(message: string) {
    alertify.error(message);
  }
} //end AlertifyMessageService
