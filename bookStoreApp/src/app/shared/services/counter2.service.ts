import { Injectable } from '@angular/core';
// import { CounterService } from './counter.service';
// import { TestService } from './test.service';

@Injectable(
  {
    "providedIn":"root"
  }
)
export class Counter2Service {
public counter:number=0;
  constructor() { 
    // super();
  }

  public incCounter(){
    this.counter+=2;
  }
  public decCounter(){
    this.counter-=2;
  }
}
