import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-rigistration',
  templateUrl: './rigistration.component.html',
  styleUrls: ['./rigistration.component.css']
})
export class RigistrationComponent implements OnInit {
  submitted = false;
  public addingNewUsers = [];
  public currentIndex;
  dismissible = true;
  defaultAlerts;
  alerts;
  url = null;
  imgUrl;
  modalRef: BsModalRef;
  adminForm: FormGroup;
  imageName=null;
  value = true;
  @ViewChild('myInput')
  myInputVariable: ElementRef;
  constructor(private modalService: BsModalService, public form_fb: FormBuilder) { }
  ngOnInit() {
    this.adminForm = this.form_fb.group({
      firstname: ["", [Validators.required, Validators.pattern("[a-zA-Z ]{3,25}")]],
      lastname: ["", [Validators.required, Validators.pattern("[a-zA-Z ]{3,25}")]],
      phonenumber: ["", [Validators.required, Validators.pattern("[0-9]{10}")]],
      email: ["", [Validators.required, Validators.email]],
      age: ["", [Validators.required, this.ageValidation]],
      file: [""]
    })
    if (this.imageName === "" || this.imageName === undefined || this.imageName === null) {
      this.value = false;
    }
  }
  
  addNewUser() {
    this.submitted = true;
    var add_newuser = {
      FName: this.adminForm.get('firstname').value,
      Lname: this.adminForm.get('lastname').value,
      pnumber: this.adminForm.get('phonenumber').value,
      mail: this.adminForm.get('email').value,
      AGE: this.adminForm.get('age').value,
      FILE: (<HTMLInputElement><unknown>document.getElementById('file-id')).files[0],
      content: this.imgUrl,
    };
    if (this.adminForm.valid) {
      if (this.currentIndex != undefined) {
        this.addingNewUsers[this.currentIndex] = add_newuser;
        this.currentIndex = undefined;
      } else {
        this.addingNewUsers.push(add_newuser);
        this.url = null;
      }
      this.submitted = false;
      this.adminForm.reset();
      this.myInputVariable.nativeElement.value = "";
      this.imageName = null;
      if(this.imageName ===null||this.imageName ===undefined  || this.imageName ===""){
        this.value=false
      }
      this.defaultAlerts = [
        {
          type: 'success',
          msg: 'form was submitted successfully'
        }];
      this.alerts = this.defaultAlerts;
    }
  }
  get addNewUserControls() {
    return this.adminForm.controls;
  }

  editCustomerDetails(obj, index) {
    this.url = obj.content;
    this.currentIndex = index;
    this.adminForm.controls.firstname.setValue(obj.FName);
    this.adminForm.controls.lastname.setValue(obj.Lname);
    this.adminForm.controls.phonenumber.setValue(obj.pnumber);
    this.adminForm.controls.email.setValue(obj.mail);
    this.adminForm.controls.age.setValue(obj.AGE);
    this.imageName = obj.FILE.name; 
    if(this.imageName ===null||this.imageName ===undefined  || this.imageName ===""){
      this.value=false
    }
    else{
      this.value=true;
    }

  }

  ageValidation(control: AbstractControl) {
    const value = control.value;
    if (value === "" && value === null) {
      return { "age_require": "age is required" }
    }
    if (value >= 0 && value <= 100) {
      return null
    }
    return { "age_notvalid": "enter age b/w 1 to 100" }
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      this.imageName = event.target.files[0].name
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) => {
        this.url = event.target.result
        this.imgUrl = event.target.result;
      }
    }
    if(this.imageName !=null||this.imageName !=undefined  || this.imageName !=""){
      this.value=true
    }
  }
  removeImg() {
    this.url = null;
    this.imageName = null;
    this.myInputVariable.nativeElement.value = "";
    console.log(this.addingNewUsers[0]);
    if(this.imageName !=null||this.imageName !=undefined  || this.imageName !=""){
      this.value=false;
    }
  }
  
}
