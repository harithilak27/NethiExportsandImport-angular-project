import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FertilizerComponent } from './fertilizer.component';

describe('FertilizerComponent', () => {
  let component: FertilizerComponent;
  let fixture: ComponentFixture<FertilizerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FertilizerComponent]
    });
    fixture = TestBed.createComponent(FertilizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
