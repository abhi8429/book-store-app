import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
// import { BookService } from './services/book.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AllBooksComponent, BookDetailsComponent, BooksComponent],
  imports: [CommonModule, BooksRoutingModule, SharedModule],
  // providers:[BookService]
})
export class BooksModule {}
