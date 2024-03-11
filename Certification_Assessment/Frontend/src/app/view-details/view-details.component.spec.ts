import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ViewDetailsComponent } from '../view-details/view-details.component';
import { Component } from '@angular/core';
import { Location } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';
@Component({
  selector: `app-products`,
  template: ` <app-view-details [productDetails]=[1,2,3]></app-view-details>`
})
class ProductsComponent {
}

describe('View product details', () => {
  let location: Location;
  let component: ViewDetailsComponent;
  let fixture: ComponentFixture<ViewDetailsComponent>;
  let mockRouter;
  beforeEach(async () => {
    mockRouter = {
      navigate: jasmine.createSpy('navigate')
    }
    await TestBed.configureTestingModule({
      declarations: [ViewDetailsComponent, ProductsComponent],
      imports: [FormsModule, ReactiveFormsModule, RouterTestingModule, HttpClientTestingModule],
      providers: [{ provide: Router, useValue: mockRouter }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDetailsComponent);
    component = fixture.componentInstance;
    location = TestBed.inject(Location);
    fixture.detectChanges();
  });


  it('View product details- placeOrder should be navigated to ', fakeAsync(() => {
    component.productDetails.id = 1;
    component.placeOrder();
    fixture.detectChanges()
    expect(mockRouter.navigate).toHaveBeenCalled()
  }));

})
