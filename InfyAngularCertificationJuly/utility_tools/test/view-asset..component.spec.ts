import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule, AbstractControl, FormsModule } from '@angular/forms';
import { DebugElement, Component, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { of, throwError } from 'rxjs';
import { AssetService } from '../shared/asset.service';
import { AddAssetComponent } from '../add-asset/add-asset.component';
import { ViewAssetComponent } from '../view-asset/view-asset.component';
import { UpdateAssetComponent } from '../update-asset/update-asset.component';
import { routes } from '../app-routing.module';
import { UpdateGuard } from '../shared/update.guard';
import Asset from '../shared/Asset';


class AssetServiceStub {
  addAsset() { }
  getAssetDetails() { }
  updateAsset() { }
  isAuthenticated() { }
}


class UpdateGuardStub {
  canActivate() {
    return true;
  }
}



describe('Testing AddAssetComponent', () => {
  let component: ViewAssetComponent;
  let fixture: ComponentFixture<ViewAssetComponent>;
  let assetService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes), ReactiveFormsModule],
      declarations: [AddAssetComponent, ViewAssetComponent, UpdateAssetComponent],
      providers: [{ provide: AssetService, useClass: AssetServiceStub }, { provide: UpdateGuard, useClass: UpdateGuardStub }],
      schemas: [NO_ERRORS_SCHEMA]
    }).overrideComponent(AddAssetComponent, {
      add: {
        template: '<h1> hi </h1>'
      }
    }).overrideComponent(UpdateAssetComponent, {
      add: {
        template: '<h1> hi </h1>'
      }
    }).overrideComponent(ViewAssetComponent, {
      add: {
        template: '<h1> hi </h1>'
      }
    }).compileComponents();
  }));


  beforeEach(async () => {
    fixture = TestBed.createComponent(ViewAssetComponent);
    component = fixture.componentInstance;
    assetService = TestBed.inject(AssetService);
    fixture.detectChanges();

  });


  it('Testing ViewAssetComponent- Get_Booking:On calling service, errorMessage must be displayed for Invalid data', fakeAsync(() => {
    spyOn(assetService, 'getAssetDetails').and.returnValue(throwError({ error: { message: 'Failure message is populated' } }));
    component.viewAsset();
    tick();
    expect(component.errorMessage).toBe('Failure message is populated');
  }));

  it('Testing ViewAssetComponent- updateAsset: update method', fakeAsync(() => {
    const spy = spyOn(assetService, 'isAuthenticated');
    component.update();
    tick();
    expect(spy).toHaveBeenCalled();

  }));

});



function getValue(id) {
  const data = document.getElementsByTagName('td')[id].innerHTML;
  return data;
}


describe('Testing ViewAssetComponent', () => {
  let component: ViewAssetComponent;
  let fixture: ComponentFixture<ViewAssetComponent>;
  let assetService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes), ReactiveFormsModule, FormsModule],
      declarations: [AddAssetComponent, ViewAssetComponent, UpdateAssetComponent],
      providers: [{ provide: AssetService, useClass: AssetServiceStub }, { provide: UpdateGuard, useClass: UpdateGuardStub }],
      schemas: [NO_ERRORS_SCHEMA]
    }).overrideComponent(AddAssetComponent, {
      add: {
        template: '<h1> hi </h1>'
      }
    }).overrideComponent(UpdateAssetComponent, {
      add: {
        template: '<h1> hi </h1>'
      }
    }).compileComponents();
  }));


  beforeEach(async () => {
    const obj = new Asset();
    fixture = TestBed.createComponent(ViewAssetComponent);
    component = fixture.componentInstance;
    assetService = TestBed.inject(AssetService);
    obj.dateOfPurchase = '2018-08-15';
    obj.assetCost = 5000;
    obj.assetDescription = 'xyz';
    obj.assetName = 'laptop';
    obj.assetCategory = 'laptop';
    component.assetDetails = obj;
    fixture.detectChanges();

  });

  it('Testing ViewAssetComponent- Get_Booking:Should display result in tabular form', () => {
    let result = '';
    const tableData = fixture.debugElement.queryAll(By.css('td')).length;
    for (let i = 0; i < tableData; i++) {
      const data = getValue(i);
      result = result + ' ' + data;
    }
    expect(result).toContain(['laptop laptop xyz 2018-08-15 INR5,000.00']);
  });


});




