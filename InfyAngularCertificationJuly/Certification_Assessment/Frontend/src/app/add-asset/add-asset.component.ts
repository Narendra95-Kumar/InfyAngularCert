import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AssetService } from '../shared/asset.service';


@Component({
  selector: 'app-add-asset',
  templateUrl: './add-asset.component.html',
  styleUrls: ['./add-asset.component.css']
})



export class AddAssetComponent implements OnInit {

  successMessage: string;
  addAssetForm: FormGroup;

  constructor(private fb: FormBuilder, private assetService: AssetService) {
  }

  ngOnInit() {
    // Add specified validators
  }


  /*
It should invoke addAsset() method of AssetService by passing addAssetForm object as a parameter.
The success callback should populate the successMessage with the message in response
*/

  addAsset() {
    // code here
  }

}


/*
  Add Custom Validation for dateOfPurchase
*/
function validateDateOfPurchase() {
  // code here
}

