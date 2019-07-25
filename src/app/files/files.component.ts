import { Component, OnInit } from '@angular/core';
import { Files } from '../files';
import { UserService } from '../user.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {

  ngOnInit() {
  }

  file = new Files();
  submitted = false;

  constructor(
    private userService: UserService,
   // private location: Location
  ) { }

  newUser(): void {
    this.submitted = false;
    this.file = new Files();
  }

 addFile() {
   this.submitted = true;
   this.save();
 }

  //goBack(): void {
    //this.location.back();
//}

  private save(): void {
    console.log(this.file);
    this.userService.addFile(this.file)
        .subscribe();
  }



}
