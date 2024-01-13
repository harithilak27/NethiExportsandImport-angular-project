import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganicFoodsComponent } from './organic-foods.component';

describe('OrganicFoodsComponent', () => {
  let component: OrganicFoodsComponent;
  let fixture: ComponentFixture<OrganicFoodsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganicFoodsComponent]
    });
    fixture = TestBed.createComponent(OrganicFoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
