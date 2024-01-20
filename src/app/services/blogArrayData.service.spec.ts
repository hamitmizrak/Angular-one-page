import { TestBed } from '@angular/core/testing';

import { BlogArrayDataService } from './blogArrayData.service';

describe('BlogArrayDataService', () => {
  let service: BlogArrayDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogArrayDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
