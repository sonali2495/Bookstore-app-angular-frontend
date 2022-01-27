import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.scss']
})
export class PlaceorderComponent implements OnInit {
  constructor(private router: Router,) { }

  ngOnInit(): void {
  }
  ongetallbooks() {
    this.router.navigateByUrl('homepage/getallbooks')
  }
}