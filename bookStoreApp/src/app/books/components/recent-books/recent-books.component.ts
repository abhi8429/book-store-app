import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { BookModel } from '../../models/book.model';

@Component({
  selector: 'app-recent-books',
  templateUrl: './recent-books.component.html',
  styleUrls: ['./recent-books.component.scss']
})
export class RecentBooksComponent implements OnInit {
  public recentBook:BookModel[];

constructor(private _bookService:BookService){

}
ngOnInit(): void {
  this.getRecentBooks();
  // throw new Error('Method not implemented.');
}

private getRecentBooks(){
  this.recentBook=this._bookService.recentBooks();
}

  



}
