import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class OrderDataService {
  API_ENDPOINT:string = 'https://eshop-deve.herokuapp.com/api/v2/orders/';
  token:string;
  orderId:string = '2117155815564';

  orderItems:Product[];
  
  constructor(
    private http: HttpClient,
    private loginService: LoginService
  ) { }

    getOrder(){
      return this.http.get(this.API_ENDPOINT + this.orderId, {
          headers:{
            Authorization: `Bearer ${this.loginService.token}`
          }
      })
    }
  

}
