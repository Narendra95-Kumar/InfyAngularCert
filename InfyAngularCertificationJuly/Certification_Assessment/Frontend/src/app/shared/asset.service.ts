import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class AssetService {

  url = 'http://localhost:3020/assetDetails'; /*Provide the URL of the web service to consume*/
  authenticate = false;
  constructor(private httpClient: HttpClient) { }

  /*
    Consumes the web service exposed at the POST URL -> http://localhost:3020/assetDetails
    After sending the request, the response must be an Observable
    Return the response back to the AddAssetComponent
  */

  addAsset(data: any) {
    // Code here
  }




  /*
   Consumes the web service exposed at the GET URL -> http://localhost:3020/assetDetails/:assetId
   After sending the request, the response must be an Observable
   Return the response back to the ViewAssetComponent
  */

  getAssetDetails(assetId) {
    // Code here

  }

  /*
 Consumes the web service exposed at the PATCH URL -> http://localhost:3020/assetDetails/:assetId
 After sending the request, the response must be an Observable
 Return the response back to the UpdateAssetComponent
*/

  updateAsset(assetId, data) {
    // Code here
  }



}
