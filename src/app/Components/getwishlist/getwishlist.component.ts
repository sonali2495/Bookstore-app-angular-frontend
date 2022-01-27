import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/bookService/book.service';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
@Component({
  selector: 'app-getwishlist',
  templateUrl: './getwishlist.component.html',
  styleUrls: ['./getwishlist.component.scss']
})
export class GetwishlistComponent implements OnInit {
  data:any
  wishList: any
  wishListCount: any
  constructor(private bookService: BookService, private router: Router,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getWishlist();
  }


  getWishlist() {
    this.bookService.getWishlistService().subscribe((response: any) => {
      console.log(response);
      this.wishList = response.result
      this.wishListCount = response.result.length
      this.wishList.reverse()
      console.log(this.wishListCount);
    })
  }

  onhome() {
    this.router.navigateByUrl('/homepage/getallbooks')
  }

  deleteWishlistItem(book:any) {
    this.bookService.deleteWishlistService(book.product_id._id).subscribe((response:any)=>{
      console.log(response);

      this._snackBar.open("Item Removed From Wishlist", '', {
        duration: 2000,
        panelClass: ['brown-snackbar']
      })
      this.getWishlist();
      
    })

  }
}
