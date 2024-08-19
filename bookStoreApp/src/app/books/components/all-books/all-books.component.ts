import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookModel } from '../../models/book.model';
import { BookService } from '../../services/book.service';
import { CounterService } from 'src/app/shared/services/counter.service';
import { Counter2Service } from 'src/app/shared/services/counter2.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss'],
  // providers:[BookService]
})
export class AllBooksComponent implements OnInit {
  private _pageTitle:string;

  public set pageTitle(value:string){
    this._pageTitle=value;
  }
  public get pageTitle(){
    return this._pageTitle;
  }
  public books: BookModel[] = [];

  constructor(
    private router: Router,
    public bookService: BookService,
    public _counterService: Counter2Service
  ) {}
  ngOnInit(): void {
    this.pageTitle='All Books'
    const allBooks = this.bookService.getBooks();
allBooks.forEach(element => {
      var obj=new BookModel();
      obj.author=element.author;
      obj.id=element.id;
      obj.price=element.price;
      obj.title=element.title;
      obj.totalPages=element.totalPages;
      this.books.push(obj);
    });
    console.log(this.books);
  }

  allBooks() {
    this.router.navigate(['/books/1']);
  }
  increase() {
    this._counterService.incCounter();
  }

  decrease() {
    this._counterService.decCounter();
  }
  
}
