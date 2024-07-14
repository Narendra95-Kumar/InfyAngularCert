import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AssetService } from '../shared/asset.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-asset',
  templateUrl: './update-asset.component.html',
  styleUrls: ['./update-asset.component.css']
})
export class UpdateAssetComponent implements OnInit {

  data: any;
  successMessage: string;
  updateAssetForm: FormGroup;
  assetId: any;

  constructor(private assetService: AssetService, private fb: FormBuilder, private route: ActivatedRoute) {
  }
  
  ngOnInit() {
    // Add specified validators
  }


  /*
It should invoke updateAsset() method of AssetService by passing assetId and 
the value to be updated.
   Example:updateAsset(1001,{"assetName":"Dell"})
The success callback should populate the successMessage with the message in response
*/
  updateAsset() {
    // Code here
  }


}
