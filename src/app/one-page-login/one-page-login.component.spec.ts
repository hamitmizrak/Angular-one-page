import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnePageLoginComponent } from './one-page-login.component';

describe('OnePageLoginComponent', () => {
  let component: OnePageLoginComponent;
  let fixture: ComponentFixture<OnePageLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnePageLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnePageLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
