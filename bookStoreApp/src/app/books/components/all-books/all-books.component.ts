import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { BookModel } from '../../models/book.model';
import { BookService } from '../../services/book.service';


@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss'],
  // providers:[BookService]
})
export class AllBooksComponent implements OnInit  {
  public books:BookModel[]=[];

  constructor(private router:Router,public bookService:BookService){

  }
    ngOnInit(): void {
      this.books=this.bookService.getBooks();
      console.log(this.books);
    }

    allBooks(){
      this.router.navigate(['/books/1']);
    }
}
