import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HotToastService } from '@ngneat/hot-toast';
import { UsersService , } from '../services/users.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogForm = new FormGroup({
    comment: new FormControl(''),
  });

  constructor(public usersService:UsersService,private toast: HotToastService,) {}
  user$ = this.usersService.currentUserProfile$;

  submit() {     
      this.toast.show("Thank you !!!");
      this.blogForm.reset();
  }

  ngOnInit(): void {
  }

}
