import { TestBed } from '@angular/core/testing';

import { BlogArrayService } from './blog-array.service';

describe('BlogArrayService', () => {
  let service: BlogArrayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogArrayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
