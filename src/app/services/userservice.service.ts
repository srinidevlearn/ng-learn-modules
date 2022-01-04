import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userObj } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  mydata: any;
  userObj : userObj;
  constructor(private http:HttpClient) { this.userObj = new userObj(); }

  getNewUserId(){
    const oldRecords = localStorage.getItem('Users');
    if(oldRecords !== null) {
      const userList= JSON.parse(oldRecords);
      return userList.length + 1 ;
    } else {
      return 1;
    } 
   }

 addUser(user: any){
    let users = [];
    const latestId = this.getNewUserId();
     user.userId=latestId;
    let storage:any = localStorage.getItem('Users');
        try{
        users = localStorage.getItem('Users')? JSON.parse(storage):[]
      } 
      catch (err){
        users=[];
      }
      users.push(user);
      localStorage.setItem('Users',JSON.stringify(users));
    }

     DisplayData(){
      return  localStorage.getItem('Users');
      // console.log(this.mydata);
     
     }
}
