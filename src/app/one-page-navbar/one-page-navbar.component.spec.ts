import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnePageNavbarComponent } from './one-page-navbar.component';

describe('OnePageNavbarComponent', () => {
  let component: OnePageNavbarComponent;
  let fixture: ComponentFixture<OnePageNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnePageNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnePageNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
