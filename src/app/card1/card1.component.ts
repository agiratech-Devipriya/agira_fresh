import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.scss']
})
export class Card1Component {

  peoples:any=[{
    imageUrl:"https://placehold.co/200x200",
    h2:'Devipriya',
    h5:'engineer',
    p:'It is our job to get you the information you need, so you can make the most of your aviation investments.'
  },
  {
    imageUrl:"https://placehold.co/200x200",
    h2:'Jeeva',
    h5:'engineer',
    p:'It is our job to get you the information you need, so you can make the most of your aviation investments.'
  },
  {
    imageUrl:"https://placehold.co/200x200",
    h2:'Harini',
    h5:'engineer',
    p:'It is our job to get you the information you need, so you can make the most of your aviation investments.'
  }
  
  
  
  ];
 
  
  

}
