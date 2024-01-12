import { Component,  OnInit  } from '@angular/core';
import {NgImageSliderModule} from 'ng-image-slider';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  images: string[] = [
    '../assets/images/1.jpg',
    '../assets/images/5.jpg',
    '../assets/images/3.jpg',
    '../assets/images/4.jpg',
  ];

  imageObject = [{
    image: '../../assets/images/v2.jpg',
    thumbImage: '../../assets/images/v2.jpg',
    title: 'potato'
}, {
    image: '../../assets/images/c1.jpg',
    thumbImage: '../../assets/images/c1.jpg',
    title: 'coco peat'
}, {
    image: '../../assets/images/l1.jpg',
    thumbImage: '../../assets//images/l1.jpg',
    title: 'banana leaf'
},{
    image: '../../assets/images/F1.jpg',
    thumbImage: '../../assets/images/F1.jpg',
    title: 'organic fertilizer'
}, {
    image: '../../assets/images/v1.jpg',
    thumbImage: '../../assets/images/v1.jpg',
    title: 'onion'
}, {
    image: '../../assets/images/l3.jpg',
    thumbImage: '../../assets/images/l3.jpg',
    title: 'mint leaf'
}];

imageClickHandler(e: any) {
  console.log('image click', e);
}

  currentImageIndex = 0;

  ngOnInit(): void {
    this.showImage(this.currentImageIndex);
  }

  showImage(index: number): void {
    const transformValue = `translateX(-${index * 100}%)`;
    document.documentElement.style.setProperty('--transform', transformValue);
  }

  prevImage(): void {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
    this.showImage(this.currentImageIndex);
  }

  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    this.showImage(this.currentImageIndex);
  }
}
