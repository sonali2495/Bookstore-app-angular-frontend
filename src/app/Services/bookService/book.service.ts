import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  token: any

  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem('token')
  }


  getallBookService() {
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      })

    }
    return this.httpService.getService('get/book', true, headers)
  }

  addtoCartService(productID: any) {
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      })
    }
    return this.httpService.postService('add_cart_item/' + productID, null, true, headers)
  }

  updateCountService(productID: any, reqPayload: any) {
    let headers = {
      headers: new HttpHeaders({
        'x-access-token': this.token,
        'content-Type': 'application/json'
      })
    }
    return this.httpService.putService('cart_item_quantity/' + productID, reqPayload, true, headers);
  }

  getCartItemsService() {

    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      })

    }
    return this.httpService.getService('get_cart_items', true, headers)
  }

  addtoWishlistService(productID: any) {
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      })
    }
    return this.httpService.postService('add_wish_list/' + productID, null, true, headers)
  }

  getWishlistService() {
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      })

    }
    return this.httpService.getService('get_wishlist_items', true, headers)
  }


  deleteWishlistService(productID: any) {
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      })
    }
    return this.httpService.deleteService('remove_wishlist_item/' + productID, null, true, headers)
  }

  checkOut(reqData: any) {
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      })
    }
    return this.httpService.postService('add/order', reqData, true, headers)
  }

  removeCartitemService(productID: any) {
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      })
    }
    return this.httpService.deleteService('remove_cart_item/' + productID, null, true, headers)
  }
  addfeedbackService(productID: any, reqPayload: any) {
    let headers = {
      headers: new HttpHeaders({
        'x-access-token': this.token,
        'content-Type': 'application/json'
      })
    }
    return this.httpService.postService('add/feedback/' + productID, reqPayload, true, headers);
  }

  getfeedBack(data: any) {
    this.token = localStorage.getItem('token')
    let options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token
      })
    }

    return this.httpService.getService(`get/feedback/${data.product_id}`, true, options);

  }
  addnewbookService(reqData: any) {
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.postService('admin/add/book', reqData, true, headers)

  }

  updatebookService(reqPayload: any, productID: any) {
    let headers = {
      headers: new HttpHeaders({
        'x-access-token': this.token,
        'content-Type': 'application/json'
      })
    }
    return this.httpService.putService('admin/update/book/' + productID, reqPayload, true, headers);
  }

  deleteBookService(productID: any) {

    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      })
    }
    return this.httpService.deleteService('admin/delete/book/' + productID, null, true, headers)
  }
}

