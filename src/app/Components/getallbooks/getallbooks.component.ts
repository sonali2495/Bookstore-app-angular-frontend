import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/bookService/book.service';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
@Component({
  selector: 'app-getallbooks',
  templateUrl: './getallbooks.component.html',
  styleUrls: ['./getallbooks.component.scss']
})
export class GetallbooksComponent implements OnInit {
  BookList: any
  BookCount: any
  book: any
  selected = 'option2';
  toggle = true;
  status = 'Enable';
  cartList: any;
  cartlistcount: any;
  page: number = 1;
  totallength:any





  constructor(private bookService: BookService, private router: Router,private _snackBar: MatSnackBar) {

  }

  ngOnInit(): void {
    this.getAllBooks();
    

  }

  getAllBooks() {
   
    this.bookService.getallBookService().subscribe((response: any) => {
      console.log(response);
      this.BookList = response.result;
     this.totallength=response.result.length
      this.BookCount = response.result.length;
      console.log("BookList======>",this.BookList);
      console.log(this.BookCount);

    },error=>{console.log(error);
    })
  }
 

  onquickview(book: any) {
    localStorage.setItem('bookId', book._id);
    console.log("id", book._id);
    this.router.navigateByUrl('/homepage/quickview/' + book._id)

  }

  sortlowtohigh() {
    this.BookList.sort((a: any, b: any) => a.price - (b.price));
  }
  sorthightolow() {
    this.BookList.sort((a: any, b: any) => b.price - (a.price));
  }

  newestarrivalse() {
    this.BookList.reverse()
  }

  addtowishlist(book:any) {
    this.bookService.addtoWishlistService(book._id).subscribe((response:any)=>{
      console.log(response);

      this._snackBar.open("Item added to Wishlist", '', {
        duration: 2000,
        panelClass: ['brown-snackbar']
      })   
    }, error => {
      console.log(error);

    })

  }

  addtocart(book:any){
    this.bookService.addtoCartService(book._id).subscribe((response: any) => {
      console.log(response);
      this._snackBar.open("Item added to Cart", '', {
        duration: 2000,
        panelClass: ['brown-snackbar']
      })   
    }, error => {
      console.log(error);

    })
  }
}