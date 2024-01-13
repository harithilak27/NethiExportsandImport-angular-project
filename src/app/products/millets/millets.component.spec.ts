import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilletsComponent } from './millets.component';

describe('MilletsComponent', () => {
  let component: MilletsComponent;
  let fixture: ComponentFixture<MilletsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MilletsComponent]
    });
    fixture = TestBed.createComponent(MilletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
