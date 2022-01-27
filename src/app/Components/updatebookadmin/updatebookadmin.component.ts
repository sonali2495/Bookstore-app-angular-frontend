import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/bookService/book.service';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EventEmitter, Inject, Output } from '@angular/core';
import { DataService } from 'src/app/Services/DataService/data.service';
@Component({
  selector: 'app-updatebookadmin',
  templateUrl: './updatebookadmin.component.html',
  styleUrls: ['./updatebookadmin.component.scss']
})
export class UpdatebookadminComponent implements OnInit {
  UpdateForm!: FormGroup;
  submitted = false
  book: any;
  bookName: any
  author: any
  description: any
  quantity: any
  price: any
  discountPrice: any
  bookid: any;



  constructor(private bookService: BookService, private router: Router, private _snackBar: MatSnackBar, private formBuilder: FormBuilder, private dataservice: DataService, public dialogRef: MatDialogRef<UpdatebookadminComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) {
    this.bookName = data.bookName
    this.author = data.author
    this.description = data.description
    this.quantity = data.quantity
    this.price = data.price
    this.discountPrice = data.discountPrice
    this.bookid = data._id
    console.log(data);
  }

  ngOnInit(): void {
    this.book = this.data.element;
    this.UpdateForm = this.formBuilder.group({
      bookName: ['', [Validators.required]],
      author: ['', [Validators.required,]],
      description: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      price: ['', [Validators.required]],
      discountPrice: ['', [Validators.required]],
      service: ['advance']
    })
  }

  updateBook() {
    this.submitted = true
    let reqData = {
      "bookName": this.UpdateForm.value.bookName,
      "author": this.UpdateForm.value.author,
      "description": this.UpdateForm.value.description,
      "quantity": this.UpdateForm.value.quantity,
      "price": this.UpdateForm.value.price,
      "discountPrice": this.UpdateForm.value.discountPrice,
    }

    this.bookService.updatebookService(reqData, this.bookid).subscribe((result: any) => {
      console.log(result);
      this.dialogRef.close(result)



    })

  }
}