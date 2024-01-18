import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnePageBlogPageComponent } from './one-page-blog-page.component';

describe('OnePageBlogPageComponent', () => {
  let component: OnePageBlogPageComponent;
  let fixture: ComponentFixture<OnePageBlogPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnePageBlogPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnePageBlogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
