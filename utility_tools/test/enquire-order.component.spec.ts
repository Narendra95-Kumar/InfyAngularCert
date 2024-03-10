import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { AppComponent } from '../app.component';
import { EnquireOrderComponent } from '../enquire-order/enquire-order.component';
import { HomeComponent } from '../home/home.component';
import { ProductsComponent } from '../products/products.component';
import { SharedService } from '../shared.service';
import { ViewDetailsComponent } from '../view-details/view-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { of } from 'rxjs';

describe('Enquire order', () => {
    let component: EnquireOrderComponent;
    let fixture: ComponentFixture<EnquireOrderComponent>;
    let debugElement: DebugElement;
    let mockRouter: any;
    let service: SharedService
    let spy
    beforeEach(async () => {
        mockRouter = {
            navigate: jasmine.createSpy('navigate')
        }
        await TestBed.configureTestingModule({
            declarations: [EnquireOrderComponent],
            providers: [SharedService],
            imports: [FormsModule, ReactiveFormsModule, RouterTestingModule, HttpClientTestingModule]
        })
            .overrideComponent(HomeComponent, {
                add: {

                    template: '<h1> hi </h1>'
                }
            }).overrideComponent(AppComponent, {
                add: {
                    template: '<h1> hi </h1>'
                }
            }).overrideComponent(ProductsComponent, {
                add: {
                    template: '<h1> hi </h1>'
                }
            }).overrideComponent(ViewDetailsComponent, {
                add: {
                    template: '<h1> hi </h1>'
                }
            })
            .compileComponents();
        service = TestBed.inject(SharedService);
    });

    beforeEach(async () => {
        fixture = TestBed.createComponent(EnquireOrderComponent);
        debugElement = fixture.debugElement
        component = fixture.componentInstance;
         spy = spyOn(service, 'getProductDetails').and.returnValue(of({
            "id": 6,
            "productName": "Landscape Painting",
            "cost": 10000,
            "color": "blue",
            "description": "Beautiful Landscape painting that gives a great aesthitic pleasure. Perfect for living room, bedroom, office, etc.",
            "img": "../assets/Picture7.2.jpg",
            "category": "painting",
            "size": "15*5*10 cm"
        }));
        component.ngOnInit();
        await fixture.detectChanges();


    });

    it('Enquire order- Enquiry Form Invalid when empty', () => {
        expect(component.enquiryForm.valid).toBeFalsy();
        expect(debugElement.nativeElement.querySelector('button[type="submit"]').disabled).toBeTruthy();
    });

    it('Enquire order- id Field Validity by default', () => {
        let id = component.enquiryForm.controls['id'];
        expect(id.disabled).toBeTruthy();
    });
    it('Enquire order- productName Field Validity by default', () => {
        let productName = component.enquiryForm.controls['productName'];
        expect(productName.disabled).toBeTruthy();
    });
    it('Enquire order- productName Field Validity by default', () => {
        let cost = component.enquiryForm.controls['cost'];
        expect(cost.disabled).toBeTruthy();
    });


    it('Enquire order- message Field Validity by default', () => {
        let message = component.enquiryForm.controls['message'];
        let errors = message.errors || {};
        expect(message.valid).toBeFalsy();
        expect(errors['required']).toBeTruthy();
    });

    it('Enquire order- message Field Validity when some value is passed ', () => {
        let message = component.enquiryForm.controls['message'];
        message.setValue('xyzz5&&&')
        let errors = message.errors || {};
        expect(errors['required']).toBeUndefined();
        expect(message.valid).toBeFalsy();
       
    });
    it('Enquire order- message Field Validity when some value is passed ', () => {
        let message = component.enquiryForm.controls['message'];
        message.setValue('xyz')
        let errors = message.errors || {};
        expect(errors['required']).toBeUndefined();
        expect(message.valid).toBeTruthy();
       
    });



    it('Enquire order- Mobile Field Validity by default', () => {
        let mobile = component.enquiryForm.controls['mobile'];
        let errors = mobile.errors || {};
        expect(mobile.valid).toBeFalsy();
        expect(errors['required']).toBeTruthy();
    });

    it('Enquire order- Mobile Field Validity when incorrect value is passed ', () => {
        let mobile = component.enquiryForm.controls['mobile'];
        mobile.setValue(12345)
        let errors = mobile.errors || {};
        expect(errors['required']).toBeUndefined();
        expect(mobile.valid).toBeFalsy();
    });

    it('Enquire order- Mobile Field Validity when correct value is passed ', () => {
        let mobile = component.enquiryForm.controls['mobile'];
        mobile.setValue(7674013548)
        let errors = mobile.errors || {};
        expect(errors['required']).toBeUndefined();
        expect(mobile.valid).toBeTruthy();
    });



    it('Enquire order- Email Field Validity by default', () => {
        let email = component.enquiryForm.controls['email']; (1)
        let errors = email.errors || {};
        expect(email.valid).toBeFalsy(); (2)
        expect(errors['required']).toBeTruthy();
    });

    it('Enquire order- Email Field Validity when incorrect value is passed ', () => {
        let email = component.enquiryForm.controls['email'];
        email.setValue('john.harris')
        let errors = email.errors || {};
        expect(errors['email']).toBeTruthy();
        expect(errors['required']).toBeUndefined();
        expect(email.valid).toBeFalsy();
    });

    it('Enquire order- Email Field Validity when correct value is passed ', () => {
        let email = component.enquiryForm.controls['email'];
        email.setValue('john.harris@xyzabc.com')
        let errors = email.errors || {};
        expect(errors['required']).toBeUndefined();
        expect(errors['email']).toBeUndefined();
        expect(email.valid).toBeTruthy();
    });

    it('Enquire order- courier Field Validity by default', () => {
        let courier = component.enquiryForm.controls['courier'];
        expect(courier.valid).toBeTruthy();
    });

    it('Enquire order- courier Field Validity by default', () => {
        let gift = component.enquiryForm.controls['gift'];
        expect(gift.valid).toBeTruthy();
    });


    it('Enquire order- Testing Form Submission ', fakeAsync(() => {

        component.enquiryForm.controls['id'].setValue(6);
        component.enquiryForm.controls['productName'].setValue("wood");
        component.enquiryForm.controls['cost'].setValue(800);
        component.enquiryForm.controls['mobile'].setValue(7674013548);
        component.enquiryForm.controls['message'].setValue("somedata");
        component.enquiryForm.controls['email'].setValue("john.harris@abcxyz.com");
        component.enquiryForm.controls['courier'].setValue("domestic");
        component.enquiryForm.controls['gift'].setValue(true);
        fixture.detectChanges()
        expect(component.enquiryForm.valid).toBeTruthy();
        const spy = spyOn(service, 'enquireOrder').and.returnValue(of({ message: 'Success' }));
        component.enquireOrder();
        tick(100);
        expect(debugElement.nativeElement.querySelector('button').disabled).toBeFalsy();
        expect(spy).toHaveBeenCalled();

    }));


    it('Enquire order- check getProductListDetails() method', fakeAsync(() => {
        component.ngOnInit()
        tick(500)
        fixture.detectChanges();
        expect(spy).toHaveBeenCalled()
        let id = component.enquiryForm.controls['id'];
        let name = component.enquiryForm.controls['productName'];
        let cost = component.enquiryForm.controls['cost'];
        expect(id.value).toBe(6);
        expect(name.value).toBe("Landscape Painting");
        expect(cost.value).toBe(10000);
    }));
});
