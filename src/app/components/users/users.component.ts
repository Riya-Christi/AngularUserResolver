import { Component, OnInit } from '@angular/core';
//import { UsersListService } from './../../service/users-list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  users: any = []
  

  constructor(
    private activatedRoute: ActivatedRoute) {
    this.users = this.activatedRoute.snapshot.data['users']; 
  console.log(this.users);
 }

  ngOnInit() {
    
  }

}