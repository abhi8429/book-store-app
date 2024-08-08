import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

constructor(private router:Router)  {

}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  navigateHome(){
    this.router.navigate(['/']);
  }

  allBooks(){
    this.router.navigate(['/books']);
  }

  login(){
    this.router.navigate(['auth/login']);
  }
  signUp(){
    this.router.navigate(['auth/signup'])
  }

}
