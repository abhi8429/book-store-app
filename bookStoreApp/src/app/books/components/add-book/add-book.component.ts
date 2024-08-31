import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookModel } from '../../models/book.model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  constructor(private _bookService:BookService){

  }

ngOnInit(): void {
  // throw new Error('Method not implemented.');
}
// @ViewChild('myForm') myForm:ElementRef;

saveBook(value:any){
  const book:BookModel=new BookModel();
  book.title=value.title;
  
  book.author=value.author;
  book.totalPages=value.pages;
  book.price={
    currency:'$',
    value:value.price
  }
  this._bookService.addBook(book);
console.log(value);
}
}
