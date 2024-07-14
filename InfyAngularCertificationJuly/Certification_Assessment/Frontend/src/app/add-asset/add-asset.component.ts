import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ControlContainer, AbstractControl } from '@angular/forms';
import { AssetService } from '../shared/asset.service';
import Asset, {AssetCategories} from '../shared/Asset';

@Component({
  selector: 'app-add-asset',
  templateUrl: './add-asset.component.html',
  styleUrls: ['./add-asset.component.css']
})



export class AddAssetComponent implements OnInit {

  successMessage: string;
  addAssetForm: FormGroup;
  assetCategories = AssetCategories;

  constructor(private fb: FormBuilder, private assetService: AssetService) {
  }

  ngOnInit() {
    // Add specified validators
    this.addAssetForm = this.fb.group({
      assetName: ['', Validators.required],
      assetCategory: ['', Validators.required],
      dateOfPurchase: ['', Validators.required, validateDateOfPurchase],
      assetCost: ['', Validators.required],
      assetDescription: ['', Validators.required, Validators.maxLength(50)],
    })
  }


  /*
It should invoke addAsset() method of AssetService by passing addAssetForm object as a parameter.
The success callback should populate the successMessage with the message in response
*/

  addAsset() {
    // code here
    if (this.addAssetForm.valid){
      this.assetService.addAsset(this.addAssetForm.value).subscribe(
        (response: any) => {
          this.successMessage = response.message;
          this.addAssetForm.reset();
        },
        (error: any) => {
          console.error('Error Adding Asset', error); 
        }
      )
    }
  }

}


/*
  Add Custom Validation for dateOfPurchase
*/
function validateDateOfPurchase(control: AbstractControl) {
  // code here
  const selectedDate = new Date(control.value)
  const today = new Date();
  return selectedDate <= today ? null : {futureDate: true};
}

