import { Injectable } from '@angular/core';

// Alertify
declare let alertify: any;

// Global State veya Local Service State için yazmalısınız
// @Injectable({
//   providedIn: 'root' //providedIn: Kaldırırsam Local Service olacaktır.
// })

// GLOBAL_SERVICE (providedIn yazmalısınız)
@Injectable({
  providedIn: 'root',
})

//EXPORT
export class AlertifyMessageService {
  // Constructor
  constructor() {}

  // Success
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
