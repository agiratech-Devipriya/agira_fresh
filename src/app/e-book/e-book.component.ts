import { Component,Input } from '@angular/core';
// import { Router } from '@angular/router';
@Component({
  selector: 'app-e-book',
  templateUrl: './e-book.component.html',
  styleUrls: ['./e-book.component.scss']
})
export class EBookComponent {
  imageUrl: string = "https://placehold.co/150x200";
  title: string = "Easy Strategies to Help Your Family Succeed in 2020";

  constructor() { }

}
