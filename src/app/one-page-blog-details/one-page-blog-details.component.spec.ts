import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnePageBlogDetailsComponent } from './one-page-blog-details.component';

describe('OnePageBlogPageComponent', () => {
  let component: OnePageBlogDetailsComponent;
  let fixture: ComponentFixture<OnePageBlogDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnePageBlogDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnePageBlogDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
