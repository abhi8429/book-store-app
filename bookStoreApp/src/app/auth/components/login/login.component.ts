import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router){

  }

  name:string='';
  ngOnInit(): void {
    this.route.queryParams.subscribe(queryParam=>{
      console.log(queryParam);
      this.name=queryParam['name'];
    })
  }

  goTosignUp(){
    this.router.navigate(['auth/signup']);
  }
  bookDetails(){
    this.router.navigate(['public/book-details/',51,'author',67,]);
  }

}
