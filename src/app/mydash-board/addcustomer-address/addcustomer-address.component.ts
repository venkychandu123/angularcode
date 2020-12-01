import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-addcustomer-address',
  templateUrl: './addcustomer-address.component.html',
  styleUrls: ['./addcustomer-address.component.css'],
})
export class AddcustomerAddressComponent implements OnInit {
  public customerAddressform: FormGroup;
  public submitted = false;
  public phoneNumber_masking = [/[1-9]/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
  public marked = false;
  public storeHour_value = false;
  public  validating_storeHour= false;
  public dayOfthe_week = ["su", "m", "t", "w", "th", "f", "sa"];
  public customer_Object = {
    name: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
    from: '',
    to: ''
  }
  public addingNew_customers = [];
  public current_index;
  disabledStoreHour(e) {
    this.marked = e.target.checked;
    var x = this.storeArray.controls
    for (var index = 0; index <x.length; index++) {
      if (this.storeHour_value) {
        x[index].get('dayoftheweek').disable();
        x[index].get('from').disable();
        x[index].get('to').disable();
        x[index].reset();
        if (index != 0) {
          this.storeArray.controls.splice(index);
        }
      } else {
        x[index].get('dayoftheweek').enable();
        x[index].get('from').enable();
        x[index].get('to').enable();
      }
    }
  }
  constructor(private form_fb: FormBuilder) { }
  ngOnInit() {
    this.customerAddressform = this.form_fb.group({
      name: ["", [Validators.required, Validators.pattern("[a-zA-Z ]{3,25}")]],
      phone: ["", [this.phoneNumberValidation]],
      address: ["", [Validators.required, Validators.pattern("[a-zA-Z0-9,-/&]*")]],
      city: ["", [Validators.required, Validators.pattern("[a-zA-Z ]*")]],
      zip: ["", [Validators.required, Validators.pattern("[0-9]{6}")]],
      storehour: [],
      store: this.form_fb.array([this.addStoreHour()])
    })
  }

  addStoreHour() {
    return this.form_fb.group({
      dayoftheweek: this.form_fb.array(this.dayOfthe_week.map(() => this.form_fb.control(false)), this.requireCheckboxesToBeCheckedValidator()),
      from: ["",[this.insertTimingColon,this.timeValidation]],
      to: ["",[this.insertTimingColon,this.timeValidation]]
    });
  }

  removeStoreHour(index) {
    this.storeArray.removeAt(index)
  }

  insertTimingColon(){
    var time = document.getElementsByClassName('time'); 
    for (var i = 0; i < time.length; i++) {
    time[i].addEventListener('keypress', function (e) { 
        var reg = /[0-9]/;
        if (this.value.length == 2 && reg.test(this.value)) this.value = this.value + ":"; 
        if (this.value.length > 5) this.value = this.value.substr(0, this.value.length - 1); 
    });
  }
  }

  timeValidation(control: AbstractControl) {
    var value = control.value;
    if (value === "" || value === null) {
      return { "required_time": "time is required" }
    }
    var reg = new RegExp("^([0-9]|0[0-9]|1[0-9]|2[0-3]):([0-9]|[0-5][0-9])$")
    if (!reg.test(value)) {
      return { "pattern_time": " invalid time" }
    }
    return null
  }

  get storeArray() {
    return <FormArray>this.customerAddressform.get('store');
  }

  validatingThe_StoreHour(index) {
    debugger
    var x = this.storeArray.controls;
    var x1 = x[index].get('from').value;
    var x2 = x[index].get('to').value;
    if (x1 === "" || x1 === undefined || x1 === null && x2 === "" || x2 === undefined || x2 === null) {
      this.validating_storeHour = true;
    }
    else {
      var y1 = x[index].get('from').valid;
      var y2 = x[index].get('to').valid;
      var y3 = x[index].get('dayoftheweek').valid;
      if (y1 && y2 && y3) {
        this.storeArray.push(this.addStoreHour());
      }
    }
  }
 
  get addCustomer_controllers() {
    return this.customerAddressform.controls;
  }

  onSubmit() {
    this.submitted = true;
    var customerobj = {
      name: this.customerAddressform.get('name').value,
      phone: this.customerAddressform.get('phone').value,
      address: this.customerAddressform.get('address').value,
      city: this.customerAddressform.get('city').value,
      zip: this.customerAddressform.get('zip').value,
      storehour: this.customerAddressform.get('storehour').value,
      week: this.storeArray.value
    }
    if (this.customerAddressform.valid) {
      if (this.current_index != undefined) {
        this.addingNew_customers[this.current_index] = customerobj;
        this.current_index = undefined
        this.clearTheCheckboxes()

      } else {
        this.addingNew_customers.push(customerobj);
        this.clearTheCheckboxes()
      }
      var control = this.storeArray.controls
      for (let index = 0; index < control.length; index++) {
        control[index].get('dayoftheweek').enable();
        control[index].get('from').enable();
        control[index].get('to').enable();
      }
      this.customerAddressform.reset();
      this.submitted = false;
      this.storeHour_value = false;
      this.validating_storeHour = false;
    }
  }

  clearTheCheckboxes() {
    var x = this.storeArray.controls
    for (var index = 0; index < x.length; index++) {
      if (index != 0) {
        this.storeArray.controls.splice(index);
      }
    }
  }

  editTheCustomer_date(obj,index) {
    debugger
    this.current_index = index;
    var value = this.addingNew_customers[index]
    this.customerAddressform.patchValue({
      name: value.name,
      phone: value.phone,
      address: value.address,
      city: value.city,
      zip: value.zip,
      storehour: value.storehour,
      store: value.week
    });
    var x = this.storeArray.controls;
    if (this.storeHour_value) {
      x[index].get('dayoftheweek').disable();
      x[index].get('from').disable();
      x[index].get('to').disable();
     }
    for (const iterator of value.week) {
      this.storeArray.push(this.addStoreHour());
      var b= this.storeArray.length-1;
      this.storeArray.at(b).setValue(iterator);
    }
       this.storeArray.removeAt(1);
  }

  requireCheckboxesToBeCheckedValidator(minRequired = 1) {
    return function validate(formGroup: FormGroup) {
      let checked = 0;
      Object.keys(formGroup.controls).forEach(key => {
        const control = formGroup.controls[key];
        if (control.value === true) {
          checked++;
        }
      });
      if (checked < minRequired) {
        return {
          requireCheckboxesToBeChecked: true,
        };
      }
      return null;
    };
  }

  phoneNumberValidation(control:AbstractControl){
    var phone= control.value
    var reg = new RegExp("^([0-9]{3})-([0-9]{3})-([0-9]{4})$");
    if (phone === "" || phone === null) {
      return { "required_number": "time is required" }
    }
    if (!reg.test(phone)) {
      return { "pattern_pattern": " invalid time" }
    }
    return null
  }
}
