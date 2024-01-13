import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganicCosmeticsComponent } from './organic-cosmetics.component';

describe('OrganicCosmeticsComponent', () => {
  let component: OrganicCosmeticsComponent;
  let fixture: ComponentFixture<OrganicCosmeticsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganicCosmeticsComponent]
    });
    fixture = TestBed.createComponent(OrganicCosmeticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
