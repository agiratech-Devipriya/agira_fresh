import { Component } from '@angular/core';

@Component({
  selector: 'app-podcast1',
  templateUrl: './podcast1.component.html',
  styleUrls: ['./podcast1.component.scss']
})
export class Podcast1Component {
  cards = [
    {
      imageUrl: 'https://placehold.co/600x400',
      duration: '30 mins',
   
      type: 'FASHION',
      title: 'Finding Moments of Joy in A challenging Year',
    },
 

    {
      imageUrl: 'https://placehold.co/600x400',
      duration: '30 mins',
      type: 'FASHION',
      title: 'Women Balancing Family And Work During COVID-19',
      
    },
    {
      imageUrl: 'https://placehold.co/600x400',
      duration: '30 mins',
    
      type: 'FASHION',
      title: 'Greenland Unicorns and the Magical Alicorn',
      
    }
  ];
}
