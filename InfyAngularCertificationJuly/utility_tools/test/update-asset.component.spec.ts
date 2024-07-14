import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { DebugElement, Pipe, PipeTransform, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { of, throwError } from 'rxjs';
import { AssetService } from '../shared/asset.service';
import { AddAssetComponent } from '../add-asset/add-asset.component';
import { ViewAssetComponent } from '../view-asset/view-asset.component';
import { UpdateAssetComponent } from '../update-asset/update-asset.component';
import { routes } from '../app-routing.module';
import { UpdateGuard } from '../shared/update.guard';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
class AssetServiceStub {
  updateAsset() { }
  getAssetDetails() { }
  addAsset() { }
}


class UpdateGuardStub {
  canActivate() {
    return true;
  }
}


describe('Testing UpdateAssetComponent', () => {
  let component: UpdateAssetComponent;
  let fixture: ComponentFixture<UpdateAssetComponent>;
  let assetService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes), ReactiveFormsModule],
      declarations: [AddAssetComponent, ViewAssetComponent, UpdateAssetComponent],
      providers: [{ provide: AssetService, useClass: AssetServiceStub }, { provide: UpdateGuard, useClass: UpdateGuardStub }],
      schemas: [NO_ERRORS_SCHEMA]
    }).overrideComponent(ViewAssetComponent, {
      add: {
        template: '<h1> hi </h1>'
      }
    }).overrideComponent(AddAssetComponent, {
      add: {
        template: '<h1> hi </h1>'
      }
    }).compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAssetComponent);
    component = fixture.componentInstance;
    assetService = TestBed.inject(AssetService);
    fixture.detectChanges();
    //  jasmine.MAX_PRETTY_PRINT_DEPTH = 2;
  });


  describe('Verifying the fields in updateAssetForm', () => {

    // //////////////////////// 1st Field /////////////////////////////

    // updateField field when no value is given
    describe('updateField field which is empty', () => {
      let errors;
      let updateField;
      // let updateFieldSpan;

      beforeEach(() => {
        updateField = component.updateAssetForm.controls.updateField;
        updateField.setValue('');
        fixture.detectChanges();
        errors = updateField.errors;
      });


      it('Testing UpdateAssetComponent- add_asset:updateField validation fails for no input', () => {
        expect(updateField.valid).toBeFalsy();
        expect(errors.required).toBeTruthy();
      });



    });

    // updateField field when a value is given
    describe('updateField field when correct value is given', () => {
      let errors;
      let updateField: AbstractControl;
      //  let updateFieldSpan;

      beforeEach(() => {
        updateField = component.updateAssetForm.controls.updateField;
        updateField.setValue('laptop');
        updateField.markAsDirty();
        fixture.detectChanges();
        // updateFieldSpan = fixture.debugElement.query(By.css('#updateFieldError'));
        errors = updateField.errors;
      });


      it('Testing UpdateAssetComponent- add_asset:updateField validation passes for valid input ', () => {
        expect(updateField.valid).toBeTruthy();
        expect(errors).toBeFalsy();
      });



    });






    describe('updateValue field which is empty', () => {
      let errors;
      let updateValue;
      // let updateValueSpan;

      beforeEach(() => {
        updateValue = component.updateAssetForm.controls.updateValue;
        updateValue.setValue('');
        fixture.detectChanges();
        errors = updateValue.errors;
        // updateValueSpan = fixture.debugElement.query(By.css('#updateValueError'));
      });


      it('Testing UpdateAssetComponent- add_asset:updateValue validation fails for no input', () => {
        expect(updateValue.valid).toBeFalsy();
        expect(errors.required).toBeTruthy();
      });

    });

    // updateValue field when a value is given
    describe('updateValue field when correct value is given', () => {
      let errors;
      let updateValue: AbstractControl;
      //  let updateValueSpan;

      beforeEach(() => {
        updateValue = component.updateAssetForm.controls.updateValue;
        updateValue.setValue(900);
        updateValue.markAsDirty();
        fixture.detectChanges();
        // updateValueSpan = fixture.debugElement.query(By.css('#updateValueError'));
        errors = updateValue.errors;
      });


      it('Testing UpdateAssetComponent- add_asset:updateValue validation passes for valid input ', () => {
        expect(updateValue.valid).toBeTruthy();
        expect(errors).toBeFalsy();
      });

      // it('Testing UpdateAssetComponent- add_asset:updateValue error message is not displayed for valid input ', () => {


      // });

    });


  });






  /////////////////// FormSubmission//////////////////
  describe('Submiting form button disabled', () => {

    let submitBtn;

    beforeEach(() => {
      component.updateAssetForm.controls.updateField.setValue(null);
      component.updateAssetForm.controls.updateValue.setValue('10');

      fixture.detectChanges();
      submitBtn = fixture.debugElement.query(By.css('button')).nativeElement;
    });

    it('Testing UpdateAssetComponent- add_asset:Form level validation should be invalid', () => {
      expect(component.updateAssetForm.valid).toBe(false);
      expect(submitBtn.disabled).toBe(true);
    });



  });

  /////////////////// Form element binding//////////////////
  describe('Checking HTML form elements binding', () => {

    let updateAssetFormTag: DebugElement;
    let updateFieldTag: DebugElement;
    let updateValueTag: DebugElement;

    beforeEach(() => {
      updateAssetFormTag = fixture.debugElement.query(By.css('form'));
      updateFieldTag = fixture.debugElement.query(By.css('#updateField'));
      updateValueTag = fixture.debugElement.query(By.css('#updateValue'));

    });

    it('Testing UpdateAssetComponent- add_asset:check binding of   form ', () => {
      expect(updateAssetFormTag.attributes['ng-reflect-form']).toBeTruthy();
      expect(updateFieldTag.attributes.formControlName).toBe('updateField');
      expect(updateValueTag.attributes.formControlName).toBe('updateValue');
    });

  });

  /////////////////// Calling the method on form submit//////////////////
  describe('Submitting valid updateValue', () => {

    beforeEach(() => {
      component.updateAssetForm.controls.updateField.setValue('Asset Name');
      component.updateAssetForm.controls.updateValue.setValue('Laptop');
      fixture.detectChanges();
    });

    it('Testing UpdateAssetComponent- update_asset:Check if the updateAsset method calls service', () => {
      const spy = spyOn(assetService, 'updateAsset').and.returnValue(of({ message: 'Success' }));
      component.updateAsset();
      expect(spy).toHaveBeenCalled();
    });

    it('Testing UpdateAssetComponent- update_asset:On calling service, success message must be populated', fakeAsync(() => {
      spyOn(assetService, 'updateAsset').and.returnValue(of({ message: 'Success message is populated' }));
      component.updateAsset();
      tick();
      expect(component.successMessage).toBe('Success message is populated');
    }));


  });

});



describe('Testing UpdateAssetComponent', () => {
  let component: UpdateAssetComponent;
  let fixture: ComponentFixture<UpdateAssetComponent>;
  let link: DebugElement;
  let routerOutletTag: DebugElement;
  let assetService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes), ReactiveFormsModule],
      declarations: [AddAssetComponent, ViewAssetComponent, UpdateAssetComponent],
      providers: [{ provide: AssetService, useClass: AssetServiceStub },

      {
        provide: ActivatedRoute,
        useValue: {
          snapshot: {
            paramMap: {
              get: (key: string) => {
                switch (key) {
                  case 'assetId':
                    return 2;
                  case 'genre':
                    return 'fiction'
                }
              }
            },
          },
        },
      },

      { provide: UpdateGuard, useClass: UpdateGuardStub }],
      schemas: [NO_ERRORS_SCHEMA]
    }).overrideComponent(ViewAssetComponent, {
      add: {
        template: '<h1> hi </h1>'
      }
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


  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAssetComponent);
    component = fixture.componentInstance;
    assetService = TestBed.inject(AssetService);
    fixture.detectChanges();
  });

  describe('Submitting valid updateValue', () => {
    it('Testing UpdateAssetComponent- update_asset:On calling service with right args', fakeAsync(() => {
      var spy = spyOn(assetService, 'updateAsset').and.returnValue(of({ message: 'Success message is populated' }));
      component.updateAsset()
      tick();
      component.data = null
      tick()
      expect(spy).toHaveBeenCalledWith(2, expect.anything());
    }));
  });
});
























