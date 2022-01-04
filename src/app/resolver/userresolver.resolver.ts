import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { UserserviceService } from '../services/userservice.service';

@Injectable({
  providedIn: 'root'
})
export class UserresolverResolver implements Resolve<boolean> {
  mydata:any;
  mydata2:any;
  
  constructor(private usersService:UserserviceService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.mydata= this.usersService.DisplayData();
    this.mydata2=JSON.parse( this.mydata);
    return this.mydata2;
    
  }
}
