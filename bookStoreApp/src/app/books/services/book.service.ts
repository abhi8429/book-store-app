import { Injectable } from '@angular/core';
import { BookModel } from '../models/book.model';

@Injectable(
  {"providedIn":"root"}
)
export class BookService {

  constructor() { }

  public getBooks():BookModel[]{
return [
  {
    id: 1,
    title: 'Angular Fundamental',
    totalPages:453,
    author: 'Ram Singh',
    price: {
      currency: 'INR',
      value: 199
    }
  },
  {
    id:2,
    title:'javascript Fundamental',
    totalPages:654,
    author:'Kishan Pal',
    price:{
        currency:'USD',
        value:84
    }
  },
  {
    id:3,
    title:'React Fundamental',
    totalPages:768,
    author:'Rajesh Kushwaha',
    price:{
      currency:'AED',
      value:70
    }
  },
  {
    id:4,
    title:'Java Fundamental',
    totalPages:988,
    author:'James Gosline',
    price:{
      currency:'ANG',
      value:98
    }
  },
  {
    id:5,
    title:'Python Fundamental',
    totalPages:777,
    author:'Ruby Dev',
    price:{
      currency:'BDT',
      value:24
    }
  },
  {
    id:6,
    title:'Php Fundamental',
    totalPages:988,
    author:'James Bond',
    price:{
      currency:'ANG',
      value:98
    }
  },
  {
    id:7,
    title:'ReactJs Fundamental',
    totalPages:777,
    author:'Ruby Paul',
    price:{
      currency:'BDT',
      value:24
    }
  },
  {
    id:8,
    title:'Java Fundamental',
    totalPages:988,
    author:'James Gosline',
    price:{
      currency:'ANG',
      value:98
    }
  }
]
  }
}
