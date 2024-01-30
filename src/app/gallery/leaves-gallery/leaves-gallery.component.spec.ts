import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavesGalleryComponent } from './leaves-gallery.component';

describe('LeavesGalleryComponent', () => {
  let component: LeavesGalleryComponent;
  let fixture: ComponentFixture<LeavesGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeavesGalleryComponent]
    });
    fixture = TestBed.createComponent(LeavesGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
