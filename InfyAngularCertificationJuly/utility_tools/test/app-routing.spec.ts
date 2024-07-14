import { TestBed, async, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from '../app.component';
import { DebugElement, NO_ERRORS_SCHEMA, Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { AddAssetComponent } from '../add-asset/add-asset.component';
import { ViewAssetComponent } from '../view-asset/view-asset.component';
import { UpdateAssetComponent } from '../update-asset/update-asset.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { routes } from '../app-routing.module';
import { ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { UpdateGuard } from '../shared/update.guard';
import { AssetService } from '../shared/asset.service';


class AssetServiceStub {
  addAsset() { }
  getAssetDetails() { }
  updateAsset() { }
}


class UpdateGuardStub {
  canActivate() {
    return false;
  }
}


fdescribe('Testing AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let link: DebugElement;
  let routerOutletTag: DebugElement;
  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes), ReactiveFormsModule],
      declarations: [AppComponent, AddAssetComponent, ViewAssetComponent, UpdateAssetComponent],
      providers: [{ provide: AssetService, useClass: AssetServiceStub }, { provide: UpdateGuard, useClass: UpdateGuardStub }],
      schemas: [NO_ERRORS_SCHEMA]
    }).overrideComponent(AddAssetComponent, {
      add: {
        template: '<h1> hi </h1>'
      }
    }).overrideComponent(ViewAssetComponent, {
      add: {
        template: '<h1> hi </h1>'
      }
    }).overrideComponent(UpdateAssetComponent, {
      add: {
        template: '<h1> hi </h1>'
      }
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    router.initialNavigation();
  });


  it('Testing Routing-  redirects you to /addAsset', fakeAsync(() => {
    if (routes.length != 0) {
      router.navigate(['']);
      tick();
      expect(location.path()).toBe('/addAsset');
    } else {
      expect(1).toBe(2);
    }

  }));

  it('Testing Routing-  redirects you to /addAsset', fakeAsync(() => {
    if (routes.length != 0) {
      router.navigate(['addAsset']);
      tick();
      expect(location.path()).toBe('/addAsset');
      router.navigate(['viewAsset']);
      tick();
      expect(location.path()).toBe('/viewAsset');
    } else {
      expect(1).toBe(2);
    }
  }));

  it('Testing Routing- should not redirect to /updateAsset', fakeAsync(() => {
    if (routes.length != 0) {
      router.navigate(['updateAsset/1001']);
      tick();
      expect(location.path()).not.toBe('/updateAsset/1001');
    } else {
      expect(1).toBe(2);
    }}

  ));

});
