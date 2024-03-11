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
  enquiryForm: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder, private service: SharedService, private route: ActivatedRoute) {
    this.enquiryForm = this.formBuilder.group({
      id: [{ value: '', disabled: true }, Validators.required],
      productName: [{ value: '', disabled: true }, Validators.required],
      cost: [{ value: '', disabled: true }, Validators.required],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      courier: ['domestic'],
      gift: [false]
    });
  }

  ngOnInit(): void {
  /* 1. It should invoke getProductDetails() method of SharedService by passing 'id' value that can 
        retrieved from the route.
     2. Create the form based on Requirement-6
     3. id, productName, cost form field values should be auto populated based on the data from getProductDetails() 
        method of SharedService 
     4. Refer QP for further details on form validations  */

     // Extract product ID from route parameters
    const productId = this.route.snapshot.paramMap.get('id');
    
     this.service.getProductDetails(productId).subscribe(
      (response) => {
        this.productDetails = response;
        // Populate form fields with product details
        this.enquiryForm.patchValue({
          id: response.id,
          productName: response.productName,
          cost: response.cost
        });
      }
    );
 
  }

  /*
    It should invoke enquireOrder() method of SharedService by passing form data as parameter.
    The success callback should populate the successMessage with the message in response
    The error callback should populate the errorMessage with the message in response
  */

  enquireOrder() {
    if (this.enquiryForm.valid) {
      // Perform enquire order action
      const enquiryData = this.enquiryForm.getRawValue();
      this.service.enquireOrder(enquiryData).subscribe(
        (response) => {
          this.successMessage = response.message;
          this.errorMessage = '';
        },
        (error) => {
          this.successMessage = '';
          this.errorMessage = error.message;
        }
      );
    }
}
}
