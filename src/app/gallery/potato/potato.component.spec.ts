import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotatoComponent } from './potato.component';

describe('PotatoComponent', () => {
  let component: PotatoComponent;
  let fixture: ComponentFixture<PotatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PotatoComponent]
    });
    fixture = TestBed.createComponent(PotatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
