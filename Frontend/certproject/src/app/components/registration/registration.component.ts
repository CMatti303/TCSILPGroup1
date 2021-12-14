import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../User';
import { matchValidator } from './confirm-equal-validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  users: User[]=[]

  registeringUserForm!: FormGroup;

  submitted=false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.registeringUserForm= new FormGroup({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      confPassword: new FormControl(null, [Validators.required, matchValidator]),
    })
  }

  receivingUserData(){
    console.log("User Data")
    this.submitted=true;
    if(this.registeringUserForm.invalid){
      return
    }
      const newUser: User={
      firstname: this.registeringUserForm.value.firstname,
      lastname: this.registeringUserForm.value.lastname,
      email: this.registeringUserForm.value.email,
      password: this.registeringUserForm.value.password
    } 
    this.users.push(newUser)
    console.log(this.users)

    this.router.navigate(['login']) 
    }
    
  }



