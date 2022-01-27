import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token: any
  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem('token')
  }

  registerUserService(reqPayload: any) {
    console.log(reqPayload);
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',

      })

    }
    return this.httpService.postService('registration', reqPayload, true, headers)
  }

  loginUserService(reqData: any) {
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        // Authorization: this.token
      })
    }
    return this.httpService.postService('login', reqData, true, headers)
  }

  updateAddressService(reqData: any) {
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      })
    }
    return this.httpService.putService('edit_user', reqData, true, headers)
  }

  adminregistrationService(reqData: any) {
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        // 'x-access-token': this.token,
      })
    }
    return this.httpService.postService('admin/registration', reqData, true, headers)
  }


  adminLoginService(reqData:any){
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        // Authorization: this.token
      })
    }
    return this.httpService.postService('admin/login', reqData, true, headers)

  }
 
  }
