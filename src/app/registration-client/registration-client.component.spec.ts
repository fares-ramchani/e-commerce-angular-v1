import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationClientComponent } from './registration-client.component';

describe('RegistrationClientComponent', () => {
  let component: RegistrationClientComponent;
  let fixture: ComponentFixture<RegistrationClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationClientComponent]
    });
    fixture = TestBed.createComponent(RegistrationClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
