import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AssetService } from './asset.service';

/*
It should invoke authenticate property of AssetService;
if the authenticate returns true; return the same
else navigate to '/viewAsset' 
*/


@Injectable({
  providedIn: 'root'
})

export class UpdateGuard implements CanActivate {
  constructor(private assetService: AssetService, private router: Router) { }
  canActivate(): boolean {
    //code here
	return null
	
  }
}


