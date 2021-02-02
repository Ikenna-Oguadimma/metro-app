import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupBusdriverComponent } from './signup-busdriver.component';

describe('SignupBusdriverComponent', () => {
  let component: SignupBusdriverComponent;
  let fixture: ComponentFixture<SignupBusdriverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupBusdriverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupBusdriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
