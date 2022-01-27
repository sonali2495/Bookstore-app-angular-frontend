import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/Services/bookService/book.service';
import { DataService } from 'src/app/Services/DataService/data.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent implements OnInit {
  value = '';
  sentmsg: any;
  subscription: any;
  count: any;
  message: any;

  constructor(private router: Router, private bookService: BookService, private dataservice: DataService) { }

  ngOnInit(): void {
    this.subscription = this.dataservice.currentMessage.subscribe(message => {
      this.message = message
      console.log(this.message);

    });
  }
  onWishList() {
    this.router.navigateByUrl('/homepage/wishlist')
  }

  oncart() {
    this.router.navigateByUrl('/homepage/getcart')
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login-signup');
  }
  onprofile() {
    this.router.navigateByUrl('/homepage/profile')
  }

  recievefromcarttohomepage($event: any) {
    console.log("recievedindisplay", $event);
    this.sentmsg = $event
    console.log(this.sentmsg);

  }

}
