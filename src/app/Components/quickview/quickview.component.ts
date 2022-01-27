import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/bookService/book.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.scss']
})
export class QuickviewComponent implements OnInit {
  bookId: any
  data: any
  item_qty = 1;
  addtocart: boolean = true;
  countbox: boolean = false;
  value: any
  feedback: any
  feedbackarray: any;
  fullName: any


  constructor(private bookService: BookService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.bookId = localStorage.getItem("bookId");
    console.log(this.bookId);
    this.getbookdetail();
    this.getfeeback()
  }

  getbookdetail() {
    this.bookService.getallBookService().subscribe(
      (response: any) => {
        response.result.forEach((element: any) => {
          if (element._id == this.bookId) {
            this.data = element;
          }
        });
      },
      (error) => console.log(error)
    )
  }

  addtoCart() {
    this.addtocart = false;
    this.countbox = true;
    this.bookService.addtoCartService(this.bookId).subscribe((response: any) => {
      console.log(response);
      this._snackBar.open("Added to Cart", '', {
        duration: 2000,
        panelClass: ['brown-snackbar']
      })

    }, error => {
      console.log(error);

    })
  }

  increase() {
    this.item_qty += 1;
    console.log(this.item_qty);
    this.updateCount();
  }



  decrease() {
    if (this.item_qty > 0) {
      this.item_qty -= 1;
      console.log('item_1->' + this.item_qty)
      this.updateCount();
    }

  }

  updateCount() {
    let reqPayload = {
      "quantityToBuy": this.item_qty
    }
    this.bookService.updateCountService(this.data._id, reqPayload).subscribe(
      (response) => { console.log(response) },
      (error) => console.log(error)
    )
  }

  addtoWishlist() {
    this.bookService.addtoWishlistService(this.bookId).subscribe((response: any) => {
      console.log(response);
      this._snackBar.open("Added to Wishlist", '', {
        duration: 2000,
        panelClass: ['brown-snackbar']
      })

    }, error => {
      console.log(error);

    })
  }

  addfeddback() {
    let reqPayload = {
      comment: this.feedback,
      rating: this.value

    }

    this.bookService.addfeedbackService(this.bookId, reqPayload).subscribe((response: any) => {
      console.log(response);
      // reqPayload.fullName=
      // this.feedbackarray.push(reqPayload)
      this.getfeeback()

    })
  }

  getfeeback() {
    let data = {
      product_id: this.bookId
    }
    this.bookService.getfeedBack(data).subscribe((response: any) => {
      console.log("Feedback", response);
      this.feedbackarray = response.result;
      this.feedbackarray.reverse()
    })
  }

  getShortName(fullName: any) {
    return fullName.split(' ').map((n: any[]) => n[0]).join('');
  }
}

