import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngComponent } from './eng.component';

describe('EngComponent', () => {
  let component: EngComponent;
  let fixture: ComponentFixture<EngComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EngComponent]
    });
    fixture = TestBed.createComponent(EngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
