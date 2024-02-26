// import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


import { Component, } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  
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
  
  
   
  
   

    
  

  imageUrl: string = "https://placehold.co/150x200";
  title: string = "";
  ebookData: any;
  selectedEbook: any;
  ebooks: any = [
   { title: 'The Great Gatsby', imageUrl: 'https://placehold.co/150x200'},
   { title: 'Pride and Prejudice', imageUrl: 'https://placehold.co/150x200' },
   {title:'Wuthering Heights',imageUrl:'https://placehold.co/150x200'},
   {title:'Catcher in the Rye',imageUrl:'https://placehold.co/150x200'},
   
 
 ];




 articles: any = [

  {
    title: 'Easy Strategies to Help Your Family Succeed in 2020',
    imageUrl: 'https://placehold.co/600x400',
    category: 'Branding',
    author: 'STUPE CURRAN',
    date: 'March 8, 2021',
    content: 'Who denounce their brothers and sisters, sowing distrust and ill-will. They freeze our hearts and our tongues, by punishing with prison anyone who provokes, praises, or merely seeks to understand those mad acts to which an insane society has driven […]'
  },
  {
    title: 'Women Balancing Family And Work During COVID-19',
    imageUrl: 'https://placehold.co/600x400',
    category: 'optimization',
    author: 'STUPE CURRAN',
    date: 'May 8, 2021',
    content: 'Who denounce their brothers and sisters, sowing distrust and ill-will. They freeze our hearts and our tongues, by punishing with prison anyone who provokes, praises, or merely seeks to understand those mad acts to which an insane society has driven […]'
  },
  {
    title: 'Even Deluded Demagogues Renounced Their Youthful Dreams',
    imageUrl: 'https://placehold.co/600x400',
    category: 'Marketing',
    author: 'STUPE CURRAN',
    date: 'April 8, 2021',
    content: 'Who denounce their brothers and sisters, sowing distrust and ill-will. They freeze our hearts and our tongues, by punishing with prison anyone who provokes, praises, or merely seeks to understand those mad acts to which an insane society has driven […]'
  },
 
];

}








  


