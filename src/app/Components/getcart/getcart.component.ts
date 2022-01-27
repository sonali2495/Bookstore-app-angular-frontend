import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BookService } from 'src/app/Services/bookService/book.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userService/user.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { DataService } from 'src/app/Services/DataService/data.service';
@Component({
  selector: 'app-getcart',
  templateUrl: './getcart.component.html',
  styleUrls: ['./getcart.component.scss']
})
export class GetcartComponent implements OnInit {
  edituseraddressform!: FormGroup;
  cartList: any = [];
  cartlistcount: any;
  item_qty = 1;
  data: any
  step = 0;
  disableTextbox = true
  orderList: any = [];

  

  constructor(private bookService: BookService, private router: Router, private formBuilder: FormBuilder, private userservice: UserService, private _snackBar: MatSnackBar,private dataservice:DataService) { }
  @Output() getcarttohomepage = new EventEmitter<string>();

  ngOnInit(): void {
    this.edituseraddressform = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.pattern(/(?=^.{0,40}$)^[a-zA-Z-]+\s[a-zA-Z-]+$/g)]],
      mobileNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],

      service: ['advance']
    });

    this.getcartitems();
  }


  getcartitems() {
    this.bookService.getCartItemsService().subscribe((response: any) => {
      console.log(response);
      this.cartList = response.result
      this.cartList.reverse()
      this.cartlistcount = response.result.length
      console.log("CARTLIST=====>", this.cartList);
      this.dataservice.changeMessage(this.cartlistcount)
    })
  }

  increase(book: any) {
    this.item_qty += 1;
    console.log(this.item_qty);
    this.updateCount(book);
  }

  decrease(book: any) {
    if (this.item_qty > 0) {
      this.item_qty -= 1;
      console.log('item_1->' + this.item_qty)
      this.updateCount(book);
    }

  }
  updateCount(book: any) {
    let reqPayload = {
      "quantityToBuy": this.item_qty
    }
    this.bookService.updateCountService(book.product_id._id, reqPayload).subscribe(
      (response) => { console.log(response) },
      (error) => console.log(error)
    )
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  onUpdateaddress() {
    console.log(this.edituseraddressform.value);
    if (this.edituseraddressform.valid) {
      let reqData = {
        addressType: "Home",
        fullAddress: this.edituseraddressform.value.address,
        city: this.edituseraddressform.value.city,
        state: this.edituseraddressform.value.state
      }
      this.userservice.updateAddressService(reqData).subscribe((response: any) => {
        console.log(response);
      })
    }
  }

  onPlaceorder() {
    this.cartList.forEach((element: any) => {
      this.orderList.push(
        {
          "product_id": element.product_id._id,
          "product_name": element.product_id.bookName,
          "product_quantity": element.quantityToBuy,
          "product_price": element.product_id.price - element.product_id.discountPrice
        }
      );
    });
    console.log("orderList is this", this.orderList);

    let reqPayload = {
      "orders": this.orderList
    }
    this.bookService.checkOut(reqPayload).subscribe((response: any) => {
      console.log(response);

    },error=>{
      console.log(error);
      
    })
    this.router.navigateByUrl('/homepage/placeorder')
  }



  deleteCartlistItem(book: any) {
    this.bookService.removeCartitemService(book._id).subscribe((response: any) => {
      console.log(response);

      this._snackBar.open("Item Removed From Cart", '', {
        duration: 2000,
        panelClass: ['brown-snackbar']
      })
      this.getcartitems()

    })

  }
  onhome() {
    this.router.navigateByUrl('/homepage/getallbooks')
  }
}
