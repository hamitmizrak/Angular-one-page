import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnepageHeaderComponent } from './onepage-header.component';

describe('OnepageHeaderComponent', () => {
  let component: OnepageHeaderComponent;
  let fixture: ComponentFixture<OnepageHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnepageHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnepageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
