import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-enquire-order',
  templateUrl: './enquire-order.component.html',
  styleUrls: ['./enquire-order.component.css']
})

export class EnquireOrderComponent implements OnInit {
  
  
  productDetails: any
  successMessage: string = ""
  errorMessage: string = ""
  constructor(private formBuilder: FormBuilder, private service: SharedService, private route: ActivatedRoute) {

  }


  enquiryForm: FormGroup = new FormGroup({});



  ngOnInit(): void {
  /* 1. It should invoke getProductDetails() method of SharedService by passing 'id' value that can 
        retrieved from the route.
     2. Create the form based on Requirement-6
     3. id, productName, cost form field values should be auto populated based on the data from getProductDetails() 
        method of SharedService 
     4. Refer QP for further details on form validations  */

 
 
  }

  /*
    It should invoke enquireOrder() method of SharedService by passing form data as parameter.
    The success callback should populate the successMessage with the message in response
    The error callback should populate the errorMessage with the message in response
  */

  enquireOrder() {

}
}
