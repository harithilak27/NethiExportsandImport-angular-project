import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiceGalleryComponent } from './rice-gallery.component';

describe('RiceGalleryComponent', () => {
  let component: RiceGalleryComponent;
  let fixture: ComponentFixture<RiceGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RiceGalleryComponent]
    });
    fixture = TestBed.createComponent(RiceGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
