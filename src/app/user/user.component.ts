import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent  implements OnInit {

  users: User[];

  user = new User() ;
  submitted = false;
  message: string;

  constructor(private userService: UserService, private location: Location) {}

  ngOnInit(): void {
     this.getUsers();
  }

  getUsers() {
    return this.userService.getUsers()
               .subscribe(
                 users => {
                  console.log(users);
                  this.users = users
                 }
                );
 }

 delete(user: User): void {
  this.submitted = true;
  this.userService.deleteUser(user.id)
      .subscribe(result => this.message = "User Deleted Successfully!");
    
      this.getUsers();
}

goBack(): void {
  this.location.back();
}

}



