// import { Component,Input } from '@angular/core';
import { Component, Input, Output, EventEmitter } from '@angular/core';

// import { Router } from '@angular/router';
@Component({
  selector: 'app-e-book',
  templateUrl: './e-book.component.html',
  styleUrls: ['./e-book.component.scss']
})
export class EBookComponent {
  @Input() ebook: any ={}
   

}