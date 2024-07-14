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
class AssetServiceStub {
  addAsset() { }
  getAssetDetails() { }
  updateAsset() { }
}


class UpdateGuardStub {
  canActivate() {
    return true;
  }
}




describe('Testing AddAssetComponent', () => {
  let component: AddAssetComponent;
  let fixture: ComponentFixture<AddAssetComponent>;
  let link: DebugElement;
  let routerOutletTag: DebugElement;
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
    }).overrideComponent(UpdateAssetComponent, {
      add: {
        template: '<h1> hi </h1>'
      }
    }).compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(AddAssetComponent);
    component = fixture.componentInstance;
    assetService = TestBed.inject(AssetService);
    fixture.detectChanges();
    //  jasmine.MAX_PRETTY_PRINT_DEPTH = 2;
  });


  describe('Verifying the fields in addAssetForm', () => {

    // //////////////////////// 1st Field /////////////////////////////

    // assetName field when no value is given
    describe('asset Name field which is empty', () => {
      let errors;
      let assetName;
      // let assetNameSpan;

      beforeEach(() => {
        assetName = component.addAssetForm.controls.assetName;
        assetName.setValue('');
        fixture.detectChanges();
        errors = assetName.errors;
      });


      it('Testing AddAssetComponent- add_asset:asset Name validation fails for no input', () => {
        expect(assetName.valid).toBeFalsy();
        expect(errors.required).toBeTruthy();
      });



    });

    // assetName field when a value is given
    describe('asset Name field when correct value is given', () => {
      let errors;
      let assetName: AbstractControl;
      //  let assetNameSpan;

      beforeEach(() => {
        assetName = component.addAssetForm.controls.assetName;
        assetName.setValue('laptop');
        assetName.markAsDirty();
        fixture.detectChanges();
        // assetNameSpan = fixture.debugElement.query(By.css('#assetNameError'));
        errors = assetName.errors;
      });


      it('Testing AddAssetComponent- add_asset:asset Name validation passes for valid input ', () => {
        expect(assetName.valid).toBeTruthy();
        expect(errors).toBeFalsy();
      });



    });


    describe('assetCategory field which is empty', () => {
      let errors;
      let assetCategory;
      // let assetCategorySpan;

      beforeEach(() => {
        assetCategory = component.addAssetForm.controls.assetCategory;
        assetCategory.setValue('');
        fixture.detectChanges();
        errors = assetCategory.errors;
        // assetCategorySpan = fixture.debugElement.query(By.css('#assetCategoryError'));
      });


      it('Testing AddAssetComponent- add_asset:assetCategory validation fails for no input', () => {
        expect(assetCategory.valid).toBeFalsy();
        expect(errors.required).toBeTruthy();
      });




    });


    describe('assetCategory field when incorrect value is given', () => {
      let errors;
      let assetCategory: AbstractControl;
      //  let assetCategorySpan;

      beforeEach(() => {
        assetCategory = component.addAssetForm.controls.assetCategory;
        assetCategory.setValue('laptop');
        assetCategory.markAsDirty();
        fixture.detectChanges();
        // assetCategorySpan = fixture.debugElement.query(By.css('#assetCategoryError'));
        errors = assetCategory.errors;
      });


      it('Testing AddAssetComponent- add_asset:assetCategory validation passes for valid input ', () => {
        expect(assetCategory.valid).toBeTruthy();
        expect(errors).toBeFalsy();
      });



    });



    // assetCategory field when a value is given
    describe('assetCategory field when correct value is given', () => {
      let errors;
      let assetCategory: AbstractControl;
      //  let assetCategorySpan;

      beforeEach(() => {
        assetCategory = component.addAssetForm.controls.assetCategory;
        assetCategory.setValue(100);
        assetCategory.markAsDirty();
        fixture.detectChanges();
        // assetCategorySpan = fixture.debugElement.query(By.css('#assetCategoryError'));
        errors = assetCategory.errors;
      });


      it('Testing AddAssetComponent- add_asset:assetCategory validation passes for valid input ', () => {
        expect(assetCategory.valid).toBeTruthy();
        expect(errors).toBeFalsy();
      });


    });



    describe('assetDescription field which is empty', () => {
      let errors;
      let assetDescription;
      // let assetDescriptionSpan;

      beforeEach(() => {
        assetDescription = component.addAssetForm.controls.assetDescription;
        assetDescription.setValue('');
        fixture.detectChanges();
        errors = assetDescription.errors;
        // assetDescriptionSpan = fixture.debugElement.query(By.css('#assetDescriptionError'));
      });


      it('Testing AddAssetComponent- add_asset:assetDescription validation fails for no input', () => {
        expect(assetDescription.valid).toBeFalsy();
        expect(errors.required).toBeTruthy();
      });



      /*it('Testing AddAssetComponent- assetDescription should not display the error message initialy', () => {
        expect(assetDescriptionSpan).toBeFalsy();
      });*/
    });

    // assetDescription field when a value is given
    describe('assetDescription field when correct value is given', () => {
      let errors;
      let assetDescription: AbstractControl;
      //  let assetDescriptionSpan;

      beforeEach(() => {
        assetDescription = component.addAssetForm.controls.assetDescription;
        assetDescription.setValue('20');
        assetDescription.markAsDirty();
        fixture.detectChanges();
        // assetDescriptionSpan = fixture.debugElement.query(By.css('#assetDescriptionError'));
        errors = assetDescription.errors;
      });


      it('Testing AddAssetComponent- add_asset:assetDescription validation passes for valid input ', () => {
        expect(assetDescription.valid).toBeTruthy();
        expect(errors).toBeFalsy();
      });


    });

    describe('assetDescription field when incorrect value is given', () => {
      let errors;
      let assetDescription: AbstractControl;
      //  let assetDescriptionSpan;

      beforeEach(() => {
        assetDescription = component.addAssetForm.controls.assetDescription;
        assetDescription.setValue('abcdefghijflmanopqrstuvwxyzabcdefghijflmanopqrstuvwxyzabcdefghijflmanopqrstuvwxyz');
        assetDescription.markAsDirty();
        fixture.detectChanges();
        // assetDescriptionSpan = fixture.debugElement.query(By.css('#assetDescriptionError'));
        errors = assetDescription.errors;
      });


      it('Testing AddAssetComponent- add_asset:assetDescription validation passes for valid input ', () => {
        expect(assetDescription.valid).toBeFalsy();
        expect(errors).toBeTruthy();
      });


    });



    describe('dateOfPurchase field which is empty', () => {
      let errors;
      let dateOfPurchase;
      // let dateOfPurchaseSpan;

      beforeEach(() => {
        dateOfPurchase = component.addAssetForm.controls.dateOfPurchase;
        dateOfPurchase.setValue('');
        fixture.detectChanges();
        errors = dateOfPurchase.errors;
        // dateOfPurchaseSpan = fixture.debugElement.query(By.css('#dateOfPurchaseError'));
      });


      it('Testing AddAssetComponent- add_plan:dateOfPurchase validation fails for no input', () => {
        expect(dateOfPurchase.valid).toBeFalsy();
        expect(errors.required).toBeTruthy();
      });



      /*it('Testing addAssetComponent- dateOfPurchase should not display the error message initialy', () => {
        expect(dateOfPurchaseSpan).toBeFalsy();
      });*/
    });

    // dateOfPurchase field when a value is given
    describe('dateOfPurchase field when correct value is given', () => {
      let errors;
      let dateOfPurchase: AbstractControl;
      //  let dateOfPurchaseSpan;

      beforeEach(() => {
        dateOfPurchase = component.addAssetForm.controls.dateOfPurchase;
        dateOfPurchase.setValue(new Date('10-12-2019'));
        dateOfPurchase.markAsDirty();
        fixture.detectChanges();
        // dateOfPurchaseSpan = fixture.debugElement.query(By.css('#dateOfPurchaseError'));
        errors = dateOfPurchase.errors;
      });


      it('Testing AddAssetComponent- add_plan:dateOfPurchase validation passes for valid input ', () => {
        expect(dateOfPurchase.valid).toBeTruthy();
        expect(errors).toBeFalsy();
      });



    });


    describe('dateOfPurchase field when correct value is given', () => {
      let errors;
      let dateOfPurchase: AbstractControl;
      //  let dateOfPurchaseSpan;

      beforeEach(() => {
        dateOfPurchase = component.addAssetForm.controls.dateOfPurchase;
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        dateOfPurchase.setValue(tomorrow);
        dateOfPurchase.markAsDirty();
        fixture.detectChanges();
        // dateOfPurchaseSpan = fixture.debugElement.query(By.css('#dateOfPurchaseError'));
        errors = dateOfPurchase.errors;
      });


      it('Testing AddAssetComponent- add_plan:dateOfPurchase validation passes for valid input ', () => {
        expect(dateOfPurchase.valid).toBeFalsy();
        expect(errors).toBeTruthy();
      });

      // it('Testing addAssetComponent- add_plan:dateOfPurchase error message is not displayed for valid input ', () => {


      // });

    });

    describe('assetCost field which is empty', () => {
      let errors;
      let assetCost;
      // let assetCostSpan;

      beforeEach(() => {
        assetCost = component.addAssetForm.controls.assetCost;
        assetCost.setValue('');
        fixture.detectChanges();
        errors = assetCost.errors;
        // assetCostSpan = fixture.debugElement.query(By.css('#assetCostError'));
      });


      it('Testing AddAssetComponent- add_asset:assetCost validation fails for no input', () => {
        expect(assetCost.valid).toBeFalsy();
        expect(errors.required).toBeTruthy();
      });



      /*it('Testing AddAssetComponent- assetCost should not display the error message initialy', () => {
        expect(assetCostSpan).toBeFalsy();
      });*/
    });

    // assetCost field when a value is given
    describe('assetCost field when correct value is given', () => {
      let errors;
      let assetCost: AbstractControl;
      //  let assetCostSpan;

      beforeEach(() => {
        assetCost = component.addAssetForm.controls.assetCost;
        assetCost.setValue(900);
        assetCost.markAsDirty();
        fixture.detectChanges();
        // assetCostSpan = fixture.debugElement.query(By.css('#assetCostError'));
        errors = assetCost.errors;
      });


      it('Testing AddAssetComponent- add_asset:assetCost validation passes for valid input ', () => {
        expect(assetCost.valid).toBeTruthy();
        expect(errors).toBeFalsy();
      });

      // it('Testing AddAssetComponent- add_asset:assetCost error message is not displayed for valid input ', () => {


      // });

    });


  });






  /////////////////// FormSubmission//////////////////
  describe('Submiting form button disabled', () => {

    let submitBtn;

    beforeEach(() => {
      component.addAssetForm.controls.assetName.setValue(100);
      component.addAssetForm.controls.assetCategory.setValue(10);
      component.addAssetForm.controls.assetDescription.setValue(null);
      component.addAssetForm.controls.dateOfPurchase.setValue('hi');
      component.addAssetForm.controls.assetCost.setValue('postpaid');
      fixture.detectChanges();
      submitBtn = fixture.debugElement.query(By.css('button')).nativeElement;
    });

    it('Testing AddAssetComponent- add_asset:Form level validation should be invalid', () => {
      expect(component.addAssetForm.valid).toBe(false);
      expect(submitBtn.disabled).toBe(true);
    });



  });

  /////////////////// Form element binding//////////////////
  describe('Checking HTML form elements binding', () => {

    let addAssetFormTag: DebugElement;
    let assetNameTag: DebugElement;
    let assetCategoryTag: DebugElement;
    let assetDescriptionTag: DebugElement;
    let dateOfPurchaseTag: DebugElement;
    let assetCostTag: DebugElement;

    beforeEach(() => {
      addAssetFormTag = fixture.debugElement.query(By.css('form'));
      assetNameTag = fixture.debugElement.query(By.css('#assetName'));
      assetCategoryTag = fixture.debugElement.query(By.css('#assetCategory'));
      assetDescriptionTag = fixture.debugElement.query(By.css('#assetDescription'));
      dateOfPurchaseTag = fixture.debugElement.query(By.css('#dateOfPurchase'));
      assetCostTag = fixture.debugElement.query(By.css('#assetCost'));
    });

    it('Testing AddAssetComponent- add_asset:check binding of   form ', () => {
      expect(addAssetFormTag.attributes['ng-reflect-form']).toBeTruthy();
      expect(assetNameTag.attributes.formControlName).toBe('assetName');
      expect(assetCategoryTag.attributes.formControlName).toBe('assetCategory');
      expect(assetDescriptionTag.attributes.formControlName).toBe('assetDescription');
      expect(dateOfPurchaseTag.attributes.formControlName).toBe('dateOfPurchase');
      expect(assetCostTag.attributes.formControlName).toBe('assetCost');
    });

    // it('Testing AddAssetComponent- add_asset:check assetName tag is binded correctly', () => {
    //   expect(assetNameTag.attributes.formControlName).toBe('assetName');
    // });

    // it('Testing AddAssetComponent- add_asset:check assetCategory tag is binded correctly', () => {
    //   expect(assetCategoryTag.attributes.formControlName).toBe('assetCategory');
    // });

    // it('Testing AddAssetComponent- add_asset:check assetDescription tag is binded correctly', () => {
    //   expect(assetDescriptionTag.attributes.formControlName).toBe('assetDescription');
    // });

    // it('Testing AddAssetComponent- add_asset:check bookedOn tag is binded correctly', () => {
    //   expect(dateOfPurchaseTag.attributes.formControlName).toBe('dateOfPurchase');
    // });

    // it('Testing AddAssetComponent- add_asset:check assetCost tag is binded correctly', () => {
    //   expect(assetCostTag.attributes.formControlName).toBe('assetCost');
    // });
  });

  /////////////////// Calling the method on form submit//////////////////
  describe('Submitting valid assetCategory', () => {

    beforeEach(() => {
      component.addAssetForm.controls.assetName.setValue(100);
      component.addAssetForm.controls.assetCategory.setValue(10);
      component.addAssetForm.controls.assetDescription.setValue('true');
      component.addAssetForm.controls.dateOfPurchase.setValue('hi');
      component.addAssetForm.controls.assetCost.setValue('postpaid');
      fixture.detectChanges();
    });

    it('Testing AddAssetComponent- add_asset:Check if the addAsset method calls service', () => {
      const spy = spyOn(assetService, 'addAsset').and.returnValue(of({ message: 'Success' }));
      component.addAsset();
      expect(spy).toHaveBeenCalled();
    });

    it('Testing AddAssetComponent- add_asset:On calling service, success message must be populated', fakeAsync(() => {
      spyOn(assetService, 'addAsset').and.returnValue(of({ message: 'Success message is populated' }));
      component.addAsset();
      tick();
      expect(component.successMessage).toBe('Success message is populated');
    }));


  });

});



