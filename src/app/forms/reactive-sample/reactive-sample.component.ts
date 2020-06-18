import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

    //console.log('Initial Value', this.user)

    this.reactiveForm = this._fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      address: this._fb.group({
        addressType : [null, Validators.required],
        expiryDate : [],
        streetAddress : [null, Validators.required],
        city : [null, Validators.required],
        state : [null, Validators.required],
        zipcode : [null, [Validators.required, Validators.pattern("^[1-9][0-9]{5}")]]
      })
    });
  }

  submitHandler(){
    console.log(this.reactiveForm);
    //console.log('Final Value', this.user)
  }

  get zipcode() { 
    const temp = <FormGroup>this.reactiveForm.controls.address;
    return temp.controls.zipcode;
  }
}
