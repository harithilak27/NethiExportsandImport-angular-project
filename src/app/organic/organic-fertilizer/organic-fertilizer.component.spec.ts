import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganicFertilizerComponent } from './organic-fertilizer.component';

describe('OrganicFertilizerComponent', () => {
  let component: OrganicFertilizerComponent;
  let fixture: ComponentFixture<OrganicFertilizerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganicFertilizerComponent]
    });
    fixture = TestBed.createComponent(OrganicFertilizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
