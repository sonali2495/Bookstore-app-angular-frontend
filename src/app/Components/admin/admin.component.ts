import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/bookService/book.service';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UpdatebookadminComponent } from '../updatebookadmin/updatebookadmin.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  adminBookList: any;
  totallength: any;
  BookCount: any;
  Addnewbookform!: FormGroup
  UpdateForm!: FormGroup
  submitted = false;


  constructor(private bookService: BookService, private router: Router, private _snackBar: MatSnackBar, private formBuilder: FormBuilder, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.Addnewbookform = this.formBuilder.group({
      bookName: ['', [Validators.required, Validators.pattern(/(?=^.{0,40}$)^[a-zA-Z-]+\s[a-zA-Z-]+$/g)]],
      author: ['', [Validators.required, Validators.pattern(/(?=^.{0,40}$)^[a-zA-Z-]+\s[a-zA-Z-]+$/g)]],
      description: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      price: ['', [Validators.required]],
      discountPrice: ['', [Validators.required]],
      service: ['advance']
    });



    this.getallbooks()
  }


  getallbooks() {
    this.bookService.getallBookService().subscribe((response: any) => {
      console.log(response);
      this.adminBookList = response.result;
      this.adminBookList.reverse()
      this.totallength = response.result.length
      this.BookCount = response.result.length;
      console.log("BookList======>", this.adminBookList);
      console.log(this.BookCount);

    }, error => {
      console.log(error);
    })
  }
  addnewbook() {
    this.submitted = true;

    if (this.Addnewbookform.valid) {
      let reqData = {
        "bookName": this.Addnewbookform.value.bookName,
        "author": this.Addnewbookform.value.author,
        "description": this.Addnewbookform.value.description,
        "quantity": this.Addnewbookform.value.quantity,
        "price": this.Addnewbookform.value.price,
        "discountPrice": this.Addnewbookform.value.discountPrice
      }
      this.bookService.addnewbookService(reqData).subscribe((response) => {
        console.log(response);
        this._snackBar.open("Book Added Succesfully", '', {
          duration: 2000,
          panelClass: ['brown-snackbar']
        })   
        this.getallbooks();

      })

    }
  }

  openDialog(book: any) {
    const dialogRef = this.dialog.open(UpdatebookadminComponent, {
      width: "600px",
      height: "400px",
      data: book,

    });


    dialogRef.afterClosed().subscribe(result => {
      this.getallbooks()
      console.log(`Dialog result: ${result}`);

    });
  }


  deleteBook(book: any) {
    this.bookService.deleteBookService(book._id).subscribe((response: any) => {
      console.log(response);
      this._snackBar.open("Book Deleted Succesfully", '', {
        duration: 2000,
        panelClass: ['brown-snackbar']
      })   
      this.getallbooks();

    })
  }
}
