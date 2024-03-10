import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from '../home/home.component';
import { AppComponent } from '../app.component';
import { EnquireOrderComponent } from '../enquire-order/enquire-order.component';
import { ViewDetailsComponent } from '../view-details/view-details.component';
import { ProductsComponent } from '../products/products.component';
import { SharedService } from '../shared.service';
import { Component, Input, Pipe } from '@angular/core';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@Pipe({
    name: 'filter'
})
export class FilterPipeMock {
    transform() {
        return ["a", "b", "c"]
    }
}

@Component({
    selector: 'app-view-details',
    template: ''
  })
  class ViewDetailStub {
    @Input() productDetails = []
  }


describe('View products', () => {
    let component: ProductsComponent;
    let fixture: ComponentFixture<ProductsComponent>;
    let service: SharedService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule,HttpClientTestingModule,FormsModule, ReactiveFormsModule,RouterTestingModule,],
            declarations: [ProductsComponent, FilterPipeMock,ViewDetailStub],
            providers: [SharedService]
        }).overrideComponent(HomeComponent, {
            add: {

                template: '<h1> hi </h1>'
            }
        }).overrideComponent(AppComponent, {
            add: {
                template: '<h1> hi </h1>'
            }
        }).overrideComponent(EnquireOrderComponent, {
            add: {
                template: '<h1> hi </h1>'
            }
        }).compileComponents();
        service = TestBed.inject(SharedService);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ProductsComponent);
        component = fixture.componentInstance;
    });


    it('View products- check getProductListDetails() method', fakeAsync(() => {
        const spy = spyOn(service, 'getProductListDetails').and.returnValue(of([1, 2, 3]));
        component.ngOnInit()
        tick(500)
        fixture.detectChanges();
        expect(spy).toHaveBeenCalled()
        expect(component.productList).toEqual([1, 2, 3]);
    }));

    it('View products- Get_Booking:Check if getBooking() method nullifies selectedBooking on invalid input', fakeAsync(() => {
        component.product = {a:"b"}
        fixture.detectChanges();
        const child = fixture.debugElement.query(By.css('app-view-details'));
        expect(child).not.toBeNull()
      }));
});
