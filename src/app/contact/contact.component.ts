import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HotToastService } from '@ngneat/hot-toast';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  contactForm = new FormGroup({
    subject: new FormControl(''),
    message: new FormControl(''),
  });

  constructor(private toast: HotToastService,public usersService:UsersService) {}
  user$ = this.usersService.currentUserProfile$;

  submit() {
    this.toast.show("Thank you !!!");
    this.contactForm.reset();   
  }

  ngOnInit(): void {
  }

}
