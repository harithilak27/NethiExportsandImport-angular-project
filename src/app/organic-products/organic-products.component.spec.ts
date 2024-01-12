import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganicProductsComponent } from './organic-products.component';

describe('OrganicProductsComponent', () => {
  let component: OrganicProductsComponent;
  let fixture: ComponentFixture<OrganicProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganicProductsComponent]
    });
    fixture = TestBed.createComponent(OrganicProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
