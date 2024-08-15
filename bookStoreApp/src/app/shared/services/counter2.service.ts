import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';
import { TestService } from './test.service';

@Injectable()
export class Counter2Service extends CounterService {
public override counter:number=0;
  constructor(private _testService:TestService) { 
    super();
  }

  public override incCounter(){
    this.counter+=2;
  }
  public override decCounter(){
    this.counter-=2;
  }
}
