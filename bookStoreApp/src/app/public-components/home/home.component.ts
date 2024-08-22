import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatButton } from '@angular/material/button';
import { AuthorsComponent } from 'src/app/shared/components/authors/authors.component';
import { AuthorsModel } from 'src/app/shared/models/authors.model';
import { CounterService } from 'src/app/shared/services/counter.service';
import { TestService } from 'src/app/shared/services/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(public _testService:TestService) {
    console.log('this is parent constructor');
  }
public count:number=0;
public data2:boolean=false;
public obj:AuthorsModel={id:101,name:'abhishek'};
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    console.log('this is parent ngonInit');
  }
  
  counter(){
this.count++;
this.data2=!this.data2;
this.obj.id=this.count++;
// this.obj={id:this.count++,name:'kshitish kumar'};
  }
}
