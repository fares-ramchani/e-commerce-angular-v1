import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarreComponent } from './side-barre.component';

describe('SideBarreComponent', () => {
  let component: SideBarreComponent;
  let fixture: ComponentFixture<SideBarreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideBarreComponent]
    });
    fixture = TestBed.createComponent(SideBarreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
