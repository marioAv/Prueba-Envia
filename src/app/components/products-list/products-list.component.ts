import { Component, OnInit } from '@angular/core';
import { OrderDataService } from '../../services/order-data.service';
import {MatDialog} from '@angular/material/dialog';
import { OrderSuccessComponent } from '../order-success/order-success.component';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  orderItems;
  orderNumber;
  isLoading:boolean = false;


  constructor(
    private orderService: OrderDataService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.isLoading = true;

     this.orderService.getOrder().subscribe(
       res => {
         this.orderService.orderItems = res['order'].items;
         this.orderItems = this.orderService.orderItems;
         this.orderNumber= res['order'].number;
         this.isLoading = false;
        }
     );
  }

  openDialog(): void {
    this.dialog.open(OrderSuccessComponent, {
        width: '500px'
    });
  }
}
