import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(private modalService: NgbModal) {
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }
  cards = [
    {
      imageUrl: 'https://placehold.co/600x400',
      duration: '30 mins',
      category: 'Branding',
      type: 'FASHION',
      title: 'Finding Moments of Joy in A challenging Year',
      author1: {
        name: 'STUPE CURRAN',
        image: 'https://placehold.co/50x50',
        date: 'March 8, 2021'
      },
      author2: {
        name: 'DEVIPRIYA',
        image: 'https://placehold.co/25x25'
      },
      content: 'Who denounce their brothers and sisters, sowing distrust and ill-will. They freeze our hearts and our tongues, by punishing with prison anyone who provokes, praises, or merely seeks to understand those mad acts to which an insane society has driven.'
    },
    
  ];
  receivePodcastData(data: string) {
    // Handle the received data here
    console.log("Received data from PodcastComponent:", data);
  }
}