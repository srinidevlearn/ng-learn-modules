import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { userObj } from 'src/app/interface/user';
import { UserresolverResolver } from 'src/app/resolver/userresolver.resolver';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
  userList : userObj[];
  users:any;
mydata:any;
  constructor( private usersService:UserserviceService,
    private activatedRoute:ActivatedRoute,
    private userResolver:UserresolverResolver) { this.userList=[]; }

  ngOnInit(): void {
    this.users=this.activatedRoute.snapshot.data['user']; 
   //console.log(JSON.stringify(this.users));
   this.userList= this.users;
  //  console.log(JSON.stringify(this.mydata));
  }
}
