import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss'],
})
export class AuthorsComponent implements OnInit,OnChanges {
@Input() data:number;
@Input() data2:boolean;

  constructor(public _testService: TestService) {}
  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('Method not implemented.');
    console.log(changes);
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}
