import { Component,  } from '@angular/core';

@Component({
  selector: 'app-about1',
  templateUrl: './about1.component.html',
  styleUrls: ['./about1.component.scss']
})
export class About1Component {

  podcast: any = {
    image: {
      src: "https://placehold.co/500x500",
      class: "imgage1"
    },
    details: {
      host: {
        title: "meet the host",
        name: "Devipriya"
      },
      description: "Our pick of the best podcasts on Spotify, Apple Podcasts and more covering technology, culture, science, politics and new ideas"
    },
    para: {
      paragraph: "Podcasts are now big business. In this post-Serial audio world, journalists, celebrities, academics and yes, anyone else who owns a mixing desk and a microphone, now has a regular show. The quality is generally very high but some efforts can still be hit and miss with dozens of podcasts popping up around the same themes or TV shows."
    }
  };

  
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

