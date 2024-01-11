import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnepageMainComponent } from './onepage-main.component';

describe('OnepageMainComponent', () => {
  let component: OnepageMainComponent;
  let fixture: ComponentFixture<OnepageMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnepageMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnepageMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
