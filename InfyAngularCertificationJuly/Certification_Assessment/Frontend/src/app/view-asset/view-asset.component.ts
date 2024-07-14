import { Component } from '@angular/core';
import { AssetService } from '../shared/asset.service';
import { Router } from '@angular/router';
import Asset from '../shared/Asset';


@Component({
  selector: 'app-view-asset',
  templateUrl: './view-asset.component.html',
  styleUrls: ['./view-asset.component.css']
})
export class ViewAssetComponent {


  errorMessage: string;
  assetId: string;
  assetDetails: Asset;


  constructor(private assetService: AssetService, private router: Router) { }


  /*
It should invoke getAssetDetails() method of AssetService by passing assetId as a parameter.
The success callback should populate the successMessage with the message in response
The error callback should populate the errorMessage with the message in response
*/
  viewAsset() {
    // code here
  }

  /*
It should navigate to /updateAsset/:assetId 
*/
  update() {
    //  code here
  }

}
