import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnepageFooterComponent } from './onepage-footer.component';

describe('OnepageFooterComponent', () => {
  let component: OnepageFooterComponent;
  let fixture: ComponentFixture<OnepageFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnepageFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnepageFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
