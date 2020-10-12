import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-rigistration',
  templateUrl: './rigistration.component.html',
  styleUrls: ['./rigistration.component.css']
})
export class RigistrationComponent implements OnInit {

  public formvalues;
  constructor() { }
  ngOnInit() {
  }
  public signup =new FormGroup({
    firstname: new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z ]*")]),
    lastname: new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z ]*")]),
    phonenumber: new FormControl("",[Validators.required,Validators.pattern("[0-9]{10}")]),
    email: new FormControl("",[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    age:new FormControl("",[Validators.required,Validators.pattern("[0-9]{1,3}")])
  });
  addnewuser(){
  this.formvalues =[{
    FName:this.signup.get('firstname').value,
     Lname:this.signup.get('lastname').value,
     pnumber:this.signup.get('phonenumber').value,
     mail:this.signup.get('email').value,
     AGE:this.signup.get('age').value,
   }];
  }
  get fname(){
    return  this.signup.get('firstname');
  }
  get lname(){
    return  this.signup.get('lastname');
  }
  get mail(){
    return  this.signup.get('email');
  }
  get pnumber(){
    return  this.signup.get('phonenumber');
  }
  get age(){
    return  this.signup.get('age');
  }
}
