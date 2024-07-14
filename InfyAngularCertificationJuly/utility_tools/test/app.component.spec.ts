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
    link = fixture.debugElement.query(By.css('.nav > li > a'));
    routerOutletTag = fixture.debugElement.query(By.css('router-outlet'));
  });

  it('Testing AppComponent- Checking presence of routerOutletTag', () => {
    expect(routerOutletTag).toBeTruthy();
  });

  it('Testing AppComponent-  routerlink', fakeAsync(() => {
    expect(fixture.debugElement.queryAll(By.css('a'))[1].attributes).toEqual(jasmine.objectContaining({
      'ng-reflect-router-link': '/addAsset'
    }));
  }));

  it('Testing AppComponent-  routerlink', fakeAsync(() => {
    expect(fixture.debugElement.queryAll(By.css('a'))[2].attributes).toEqual(jasmine.objectContaining({
      'ng-reflect-router-link': '/viewAsset'
    })
    );
  }));
});
