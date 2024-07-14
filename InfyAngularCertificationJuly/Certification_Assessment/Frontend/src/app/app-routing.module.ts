import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAssetComponent } from "./add-asset/add-asset.component";
import { ViewAssetComponent } from "./view-asset/view-asset.component";
import { UpdateAssetComponent } from "./update-asset/update-asset.component";


/*
  Add the route paths to navigate to appropriate
  1. /addAsset -> AddAssetComponent
  2. /viewAsset -> ViewAssetComponent
  3. /updateAsset/:assetId -> UpdateAssetComponet; update route gaurd should be applied
  4. In case an Invalid URL is provided, the user must be redirected to the addAsset page.
  */

export const routes: Routes = [
  { path: '', redirectTo: '/addAsset', pathMatch: 'full' },
  { path: '**', redirectTo: '/addAsset' },
  { path: 'addAsset', component: AddAssetComponent },
  { path: 'viewAsset', component: ViewAssetComponent },
  { path: 'updateAsset/:assetId', component: UpdateAssetComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
