import { Component } from '@angular/core';
import { CounterService } from 'src/app/shared/services/counter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
constructor(public _counterService:CounterService){

}
 increase(){
this._counterService.incCounter();
}
 decrease(){
this._counterService.decCounter();
}

}
