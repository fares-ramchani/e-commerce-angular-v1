import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPromoComponent } from './product-promo.component';

describe('ProductPromoComponent', () => {
  let component: ProductPromoComponent;
  let fixture: ComponentFixture<ProductPromoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductPromoComponent]
    });
    fixture = TestBed.createComponent(ProductPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
