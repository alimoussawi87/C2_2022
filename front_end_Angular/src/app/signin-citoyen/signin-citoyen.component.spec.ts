import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninCitoyenComponent } from './signin-citoyen.component';

describe('SigninCitoyenComponent', () => {
  let component: SigninCitoyenComponent;
  let fixture: ComponentFixture<SigninCitoyenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninCitoyenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigninCitoyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
