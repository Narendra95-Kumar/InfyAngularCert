import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }




  /*
 Consumes the web service exposed at the GET URL -> http://localhost:3020/products
 After sending the request, the response must be an Observable
 Return the response back to the ProductsComponent
*/
  getProductListDetails(): Observable<any> {
    return null
  }

  /*
 Consumes the web service exposed at the POST URL -> http://localhost:3020/enquiries
 After sending the request, the response must be an Observable
 Return the response back to the EnquireOrderComponent
*/
  enquireOrder(details: any): Observable<any> {
    return null
  }

  /*
 Consumes the web service exposed at the GET URL -> http://localhost:3020/products/:id
 After sending the request, the response must be an Observable
 Return the response back to the EnquireOrderComponent
*/

  getProductDetails(id: any): Observable<any> {
    return null
  }
}
