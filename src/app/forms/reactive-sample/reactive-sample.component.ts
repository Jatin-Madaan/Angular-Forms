import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-sample',
  templateUrl: './reactive-sample.component.html',
  styleUrls: ['./reactive-sample.component.css']
})
export class ReactiveSampleComponent implements OnInit {

  states: Array<String> = ['AR', 'AL', 'CA', 'DC'];
  reactiveForm : FormGroup;
  user = {'fname' : 'Bob', 'lname' : 'Mathews'}
  constructor(private _fb : FormBuilder) { }

  ngOnInit() {

    console.log('Initial Value', this.user)

    this.reactiveForm = this._fb.group({
      firstName: [this.user.fname],
      lastName: [this.user.lname],
      address: this._fb.group({
        addressType : [],
        expiryDate : [],
        streetAddress : [],
        city : [],
        state : [],
        zipcode : []
      })
    });
  }

  submitHandler(){
    console.log(this.reactiveForm);
    console.log('Final Value', this.user)
  }
}
