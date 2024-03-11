import { Component , Input } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent {
  //Do not add any extra properties/methods.
  constructor(private router: Router, private service: SharedService) { }

  // Use the appropriate decorator to retrieve data from ProductsComponent
  @Input() productDetails: any;
  successMessage: string = '';
  errorMessage: string = '';


  placeOrder() {
    if (this.productDetails && this.productDetails.id) {
      this.router.navigate(['/enquire-order', this.productDetails.id]);
    }
  }

}
