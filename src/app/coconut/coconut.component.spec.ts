import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoconutComponent } from './coconut.component';

describe('CoconutComponent', () => {
  let component: CoconutComponent;
  let fixture: ComponentFixture<CoconutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoconutComponent]
    });
    fixture = TestBed.createComponent(CoconutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
