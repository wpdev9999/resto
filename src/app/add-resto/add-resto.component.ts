import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})

export class AddRestoComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]); 
  name = new FormControl('', [Validators.required]); 

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    if(this.email.hasError('email')){
      return 'Not a valid email';
    }
    if (this.name.hasError('required')) {
      return 'You must enter your name';
    }
    return;
  }

    constructor() { }

  ngOnInit(): void {
  }

}
