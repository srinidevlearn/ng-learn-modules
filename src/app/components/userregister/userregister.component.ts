import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.scss']
})
export class UserregisterComponent implements OnInit {
  registerForm =new FormGroup({});
  myItem:any;
  submitted = false;
  user:any=[];
  mydata:any=[];
  constructor(private fb:FormBuilder,private userService:UserserviceService) { }

  ngOnInit(): void {
    this.createRegisterationForm();
  }

  createRegisterationForm(){
    this.registerForm=this.fb.group({
      fullname : (['',Validators.required]),
        email : ['',[Validators.required,Validators.email]],
      mobilenumber : ['',[Validators.required,Validators.maxLength(10)]],
      password:[null,[Validators.required,Validators.minLength(8)]],
      
    });
  }

  onSubmit(){
    this.submitted=true;
     console.log("success"+ JSON.stringify(this.registerForm.value));
    this.userService.addUser(this.registerForm.value);
    // this.addUser(this.registerForm.value);
   }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
}

}
