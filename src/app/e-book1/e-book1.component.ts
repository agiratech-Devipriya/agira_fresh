import { Component } from '@angular/core';

@Component({
  selector: 'app-e-book1',
  templateUrl: './e-book1.component.html',
  styleUrls: ['./e-book1.component.scss']
})
export class EBook1Component {
  imageUrl: string = "https://placehold.co/150x200";
  title: string = "";
  ebookData: any;
  selectedEbook: any;
  ebooks: any = [
   { title: 'The Great Gatsby', imageUrl: 'https://placehold.co/150x200'},
   { title: 'Pride and Prejudice', imageUrl: 'https://placehold.co/150x200' },
   {title:'Wuthering Heights',imageUrl:'https://placehold.co/150x200'},
   {title:'Catcher in the Rye',imageUrl:'https://placehold.co/150x200'},
   { title: 'The Great Gatsby', imageUrl: 'https://placehold.co/150x200'},
   { title: 'Pride and Prejudice', imageUrl: 'https://placehold.co/150x200' },
   {title:'Wuthering Heights',imageUrl:'https://placehold.co/150x200'},
   {title:'Catcher in the Rye',imageUrl:'https://placehold.co/150x200'},
   
 
 ];

}
