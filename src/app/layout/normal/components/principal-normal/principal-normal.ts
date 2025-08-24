import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { HomeNormal } from "../home-normal/home-normal";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-principal-normal',
  imports: [CommonModule], // 👈 aquí agregas CommonModule
  templateUrl: './principal-normal.html',
  styleUrl: './principal-normal.css'
})
export class PrincipalNormal {

// stories.component.ts
ngOnInit() {}

stories = [
  { title: 'Club 1', type: 'universitario', image: 'https://i.pinimg.com/736x/71/28/dd/7128dd5543364343c79a84bf2b963324.jpg' },
  { title: 'Club 2', type: 'universitario', image: 'https://i.pinimg.com/1200x/c7/dd/d6/c7ddd68b1fbee182869e72732dd38012.jpg' },
  { title: 'Club 3', type: 'universitario', image: 'https://i.pinimg.com/736x/70/85/e3/7085e3cc85f3e2478e845af5509ca0e5.jpg' },
  { title: 'Club 4', type: 'universitario', image: 'https://i.pinimg.com/736x/04/dd/f6/04ddf690d4e7ab19d742a398b3e8f099.jpg' },
  { title: 'Club 5', type: 'universitario', image: 'https://i.pinimg.com/736x/88/29/53/882953f80ce53ef32325c6386135dc0d.jpg' },
  { title: 'Club 6', type: 'universitario', image: 'https://i.pinimg.com/736x/17/d3/92/17d3927dc2d91cf0bcd438558bbbb7ef.jpg' },
  { title: 'Club 7', type: 'universitario', image: 'https://i.pinimg.com/736x/04/dd/f6/04ddf690d4e7ab19d742a398b3e8f099.jpg' },
  { title: 'Club 8', type: 'universitario', image: 'https://i.pinimg.com/736x/88/29/53/882953f80ce53ef32325c6386135dc0d.jpg' },
  { title: 'Club 9', type: 'universitario', image: 'https://i.pinimg.com/736x/17/d3/92/17d3927dc2d91cf0bcd438558bbbb7ef.jpg' }
];

storyGroups: any[][] = [];
currentIndex = 0;

constructor() {
  this.groupStories();
  window.addEventListener('resize', () => {
    this.groupStories();
  });
}

groupStories() {
  this.storyGroups = [];

  let itemsPerSlide = 4; // default desktop

  if (window.innerWidth < 576) {
    itemsPerSlide = 3; // móvil → 2 por slide
  } 

  for (let i = 0; i < this.stories.length; i += itemsPerSlide) {
    this.storyGroups.push(this.stories.slice(i, i + itemsPerSlide));
  }
}
onSlide(event: any) {
  this.currentIndex = event.to;
}

get isFirstSlide(): boolean {
  return this.currentIndex === 0;
}

get isLastSlide(): boolean {
  return this.currentIndex === this.storyGroups.length - 1;
}

selectStory(type: string) {
  console.log('Seleccionaste:', type);
}





}
