import { TestBed } from '@angular/core/testing';

import { AlertifyServicesService } from './alertifyMessage.service';

describe('AlertifyServicesService', () => {
  let service: AlertifyServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertifyServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
