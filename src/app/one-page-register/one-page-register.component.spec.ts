import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnePageRegisterComponent } from './one-page-register.component';

describe('OnePageRegisterComponent', () => {
  let component: OnePageRegisterComponent;
  let fixture: ComponentFixture<OnePageRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnePageRegisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnePageRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
