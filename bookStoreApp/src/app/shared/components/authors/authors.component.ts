import { Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { TestService } from '../../services/test.service';
import { AuthorsModel } from '../../models/authors.model';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss'],
})
export class AuthorsComponent implements OnInit,OnChanges,DoCheck {
@Input() data:number;
@Input() data2:boolean;
@Input() author:AuthorsModel;

  constructor(public _testService: TestService) {
    console.log('hello child constructor');
  }
  ngDoCheck(): void {
   console.log(this.author);
  }
  ngOnChanges(changes: SimpleChanges): void {
    
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('hello child component ngOninit');
  }
}
