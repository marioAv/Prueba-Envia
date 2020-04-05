import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators,FormGroupDirective} from '@angular/forms';
import { OrderDataService } from '../../services/order-data.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.scss']
})
export class AddProductFormComponent implements OnInit {

  productForm:any;
  @ViewChild(FormGroupDirective)
  formGroupDirective: FormGroupDirective;

  constructor(
    private formBuilder: FormBuilder,
    private orderService: OrderDataService,
  ) {


    this.productForm = this.formBuilder.group({
       sku:['', [
         Validators.required
       ]],
       name:['', [
        Validators.required
      ]],
      quantity:['', [
        Validators.required
      ]],
      price:['', [
        Validators.required
      ]]
    })

   }

  ngOnInit(): void {
    
  }

  onSubmit(productData:Product) {
    if(this.productForm.valid){
      this.orderService.orderItems.push(productData);
      this.formGroupDirective.resetForm();
    }
  }


}
