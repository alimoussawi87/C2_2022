import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninUsagerComponent } from './signin-usager.component';

describe('SigninUsagerComponent', () => {
  let component: SigninUsagerComponent;
  let fixture: ComponentFixture<SigninUsagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninUsagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigninUsagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
