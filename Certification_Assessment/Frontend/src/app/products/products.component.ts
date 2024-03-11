import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  //You may create properties/methods here to bind text to template.
  constructor(private service: SharedService, private http: HttpClient, private router: Router) { }

  product: any = {}
  selectedCategory: any  
  productList: any[] = []
  categoryList = ["clock", "painting", "furniture", "pottery"]
  selectedProduct: any;

  ngOnInit(): void {
    /* It should fetch product list by invoking getProductListDetails() 
    method of SharedService and populate data to productList property */
    this.service.getProductListDetails()
    .subscribe(
      (response) => {
        this.productList = response
      }
    );

  }

  openViewModal(product: any): void {
    this.selectedProduct = product;
  }

}
