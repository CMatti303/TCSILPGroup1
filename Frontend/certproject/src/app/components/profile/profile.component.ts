import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  isHidden = true
  
  toggleHidden(){
    this.isHidden = ! this.isHidden
  }

  profileEditAddressForm = new FormGroup({
    street: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    zip: new FormControl('', Validators.required)
  })

  constructor() { }

  ngOnInit(): void {
  }

}
