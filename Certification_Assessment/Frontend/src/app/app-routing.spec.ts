import { TestBed, fakeAsync, tick, getTestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Location } from "@angular/common";
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from "@angular/router";
import { routes } from './app-routing.module'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EnquireOrderComponent } from './enquire-order/enquire-order.component';
import { FilterPipe } from './filter.pipe'
import { ViewDetailsComponent } from './view-details/view-details.component';
import { ProductsComponent } from './products/products.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';




describe('Configure routes', () => {

    let location: Location;
    let router: Router;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule.withRoutes(routes), HttpClientTestingModule
            ],
            declarations: [
                AppComponent, HomeComponent, EnquireOrderComponent, ProductsComponent, FilterPipe, ViewDetailsComponent
            ],
            providers: [],
            schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
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
            }).overrideComponent(EnquireOrderComponent, {
                add: {
                    template: '<h1> hi </h1>'
                }
            }).overrideComponent(ViewDetailsComponent, {
                add: {
                    template: '<h1> hi </h1>'
                }
            }).compileComponents();
        router = TestBed.inject(Router);
        location = TestBed.inject(Location);
        router.initialNavigation();
    });



    it('Configure routes- navigate to "" redirects you to /home', fakeAsync(() => {
        router.navigate([""]).then(() => {
            expect(location.path()).toBe("/home");
        });
    }));



    it('Configure routes- navigate to "enquire-order/1001" redirects you to /home', fakeAsync(() => {
        router.navigate(["enquire-order/1001"]).then(() => {
            expect(location.path()).toBe("/enquire-order/1001");
        });
    }));

    it('Configure routes- navigate to "products" redirects you to /products', fakeAsync(() => {
        router.navigate(['products']);
        tick();
        expect(location.path()).toBe('/products');
    }));


});
