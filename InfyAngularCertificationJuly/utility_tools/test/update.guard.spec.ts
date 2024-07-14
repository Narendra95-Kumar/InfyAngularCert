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
import { AssetService } from '../shared/asset.service';
import { UpdateGuard } from '../shared/update.guard';

class AssetServiceStub {
  addAsset() { }
  getAssetDetails() { }
  updateAsset() { }
  updateGaurd() { }
}


fdescribe('Testing AppComponent', () => {

  let location: Location;
  let updateGuard: UpdateGuard;
  let assetService;
  let router: Router;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes), ReactiveFormsModule],
      declarations: [AppComponent, AddAssetComponent, ViewAssetComponent, UpdateAssetComponent],
      providers: [{ provide: AssetService, useClass: AssetServiceStub }],
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
    updateGuard = TestBed.inject(UpdateGuard);
    assetService = TestBed.inject(AssetService);
    location = TestBed.get(Location);
    router = TestBed.get(Router);

  });


  it('Testing RouteGaurd-  return true', fakeAsync(() => {
    // spyOn(assetService, 'updateGaurd').and.returnValue(true);
    assetService.authenticate = true
    expect(updateGuard.canActivate()).toEqual(true);
  }));


  it('Testing RouteGaurd-  returns false', fakeAsync(() => {
    // spyOn(assetService, 'updateGaurd').and.returnValue(false);
    assetService.authenticate = false
    spyOn(router, 'navigate');
    expect(updateGuard.canActivate()).toEqual(false);
    tick();
    expect(router.navigate).toHaveBeenCalled();

  }));





});
