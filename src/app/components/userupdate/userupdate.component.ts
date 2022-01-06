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
  userId:any;

    edituser=new FormGroup({
    fullname:new FormControl(''),
    email:new FormControl(''),
    mobilenumber:new FormControl(''),
    password:new FormControl(''),
    userId:new FormControl(''),
  })
  constructor(private userService:UserserviceService,
    private activatedRoute:ActivatedRoute,
    private router:Router) { 
      this.userObj=new userObj;
     
    }
   

  ngOnInit(): void {
    //this.userService.editUser();

   this.userId = this.activatedRoute.snapshot.params.userid;   // id should be match with approuting module
   // console.log(this.activatedRoute.snapshot.params.id);
    this.onedit(this.userId);
   
    }

    onedit(userId:number){
       const storage= localStorage.getItem('Users');
       const users = storage ? JSON.parse(storage) : []
       if(users.length ){
      const oneUser = users.find((a:any) => a.userId == userId)
        if(oneUser){ 
      this.edituser.controls['fullname'].setValue(oneUser.fullname);
      this.edituser.controls['email'].setValue(oneUser.email);
      this.edituser.controls['mobilenumber'].setValue(oneUser.mobilenumber);
      this.edituser.controls['password'].setValue(oneUser.password);
      this.edituser.controls['userId'].setValue(oneUser.userId);
    }
  }
    }

    updateUser(){  
      
      let storage:any = localStorage.getItem('Users');
     const users =storage ? JSON.parse(storage):[]
    const userIndex = users.findIndex((a:any) => a.userId == this.userId)
    const userform=  this.edituser.value;
    console.log(userform);
    users[userIndex] = userform;

    localStorage.setItem('Users', JSON.stringify(users));
    this.router.navigate(['listUser']);


  }
     
     copyUser(){
      let storage:any = localStorage.getItem('Users');
      const users =storage ? JSON.parse(storage):[]
     const userform=  this.edituser.value;
     userform.userId= this.userService.getNewUserId();
     console.log(userform);
     users.push(userform);
     localStorage.setItem('Users', JSON.stringify(users));
     this.router.navigate(['listUser']);
     }
     
    }
