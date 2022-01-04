import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { userObj } from 'src/app/interface/user';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-userupdate',
  templateUrl: './userupdate.component.html',
  styleUrls: ['./userupdate.component.scss']
})
export class UserupdateComponent implements OnInit {
  id:any;
  post:any;
  userObj:userObj;
  registerForm = new FormGroup({});
  constructor(private userService:UserserviceService,
    private route:ActivatedRoute,
    private router:Router) { 
      this.userObj=new userObj;
      this.route.params.subscribe((res)=>{
        this.userObj.userId=res['id']
      })
    }

  ngOnInit(): void {
    
    }

  
  

}
