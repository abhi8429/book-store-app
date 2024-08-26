import { AfterContentChecked, AfterContentInit, Component, ContentChild, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { TestService } from '../../services/test.service';
import { AuthorsModel } from '../../models/authors.model';
import { AuthorsAddressComponent } from '../authors-address/authors-address.component';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss'],
})
export class AuthorsComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked {
  @ContentChild(AuthorsAddressComponent) authorAddress:AuthorsAddressComponent;
  public childCounter=0;
@Input() data:number;
@Input() data2:boolean;
@Input() author:AuthorsModel;

  constructor(public _testService: TestService) {
    console.log('hello child constructor');
  }
  ngAfterContentChecked(): void {
    // throw new Error('Method not implemented.');
    console.log('after content checked....'+ this.authorAddress?.address);
  }
  ngAfterContentInit(): void {
   console.log('after content  init..'+this.authorAddress?.address);
  }
  ngDoCheck(): void {
  //  console.log(this.author);
  }
  ngOnChanges(changes: SimpleChanges): void {
    
    // console.log(changes);
  }

  ngOnInit(): void {
    console.log('hello child component ngOninit');
  }
  incCounter(){
    this.childCounter++;
  }
}
