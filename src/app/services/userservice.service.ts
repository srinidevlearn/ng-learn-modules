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
     const sortedList= userList.sort((a:any,b:any) => a.userId > b.userId ? 1 : -1 ); //1:-1 1=true ,-1 swap
     console.log(sortedList);
     return sortedList[sortedList.length -1].userId+1;
      
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
     //users=[user, ...users,];
      localStorage.setItem('Users',JSON.stringify(users));
    }

    editUser(id:number){
      
       /**
       * 1. Get the element specified position in array
       * 2. Data should be populated into the form fields
       * 3. form values into the specific array position 
       * 4. new array into the set item (immutable way) old data should be present
       * 5. add roles in register page
       * 
       * */ 
    }
     
    deleteUser(userid:number) {
      let storage: any = localStorage.getItem('Users');

      const users = storage ? JSON.parse(storage) : []
  
      for (let i = 0; i < users.length; i++) {
        if (users[i].userId == userid) {
          users.splice(i, 1);
        }
  
        localStorage.setItem('Users', JSON.stringify(users));
      }
      return users;
      
      //this.route.navigate(['listUser']);
  
    }
      
     


     DisplayData(){
      return  localStorage.getItem('Users');
      // console.log(this.mydata);
     
     }
  
}
