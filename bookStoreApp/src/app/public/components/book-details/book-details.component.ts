import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  public id: number = 0;
  public autherId: number = 0;
  name:string='';
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    console.log(this.route);
    this.route.params.subscribe((param)=>{
      this.id=param['id'];
      this.autherId=param['autherId'];
    console.log(this.id);
    console.log(this.autherId);
    })


    this.route.queryParams.subscribe(queryParam=>{
      this.name=queryParam['name'];
    })
  }
}
