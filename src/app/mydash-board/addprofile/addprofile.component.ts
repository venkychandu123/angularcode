import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AddprofileServiceService } from 'src/app/service/addprofile-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-addprofile',
  templateUrl: './addprofile.component.html',
  styleUrls: ['./addprofile.component.css']
})
export class AddprofileComponent implements OnInit {

  District = [];
  cities = [];
  years = null;
  months = null;
  days = null;
  EducationDetails: FormGroup;
  studentsDetails = [];
  minDate;
  currentIndex;
  submitted = false;
  calculateValue=false;
  constructor(public addprofileaddress: AddprofileServiceService, public formbuild: FormBuilder) { }
  ngOnInit(): void {
    this.EducationDetails = this.formbuild.group({
      addressline1: ["", [Validators.required, Validators.pattern("[a-zA-Z0-9& ,/]{5,}")]],
      addressline2: ["", [Validators.required, Validators.pattern("[a-zA-Z0-9& ,/]{5,}")]],
      state: ["", [Validators.required]],
      District: ["", [Validators.required]],
      constituencie: ["", [Validators.required]],
      zipcode: ["", [Validators.required, Validators.pattern("[0-9]{6}")]],
      startdate: ["", [Validators.required]],
      endDate: ["", [Validators.required]]
    });
  }

  get controls() {
    return this.EducationDetails.controls;
  }

 public onSelectDistricts(state_id) {
    this.cities = [];
    this.District = this.addprofileaddress.getDistricts().filter((item) => {
      return item.state_id === state_id
    });
  }

  public onSelectConstituencie(districts_id) {
    this.cities = this.addprofileaddress.getConstituency().filter((item) => {
      return item.districts_id === districts_id
    });
  }

  getStates() {
    return [
      { id: 'AndhraPradesh', name: 'AndhraPradesh' },
      { id: 'ArunachalPradesh', name: 'ArunachalPradesh' },
      { id: 'Assam', name: 'Assam' },
      { id: 'Kerala', name: 'Kerala' },
      { id: 'Maharashtra', name: 'Maharashtra' }
    ];
  }

  startdate() {
    var to = (<HTMLInputElement><unknown>document.getElementById('date2')).value = '';
    var from = (<HTMLInputElement><unknown>document.getElementById('date1')).value;
    var startdate = new Date(from);
    var day = startdate.getDate() + 1;
    var month = startdate.getMonth() + 1;
    var year = startdate.getFullYear();
    if (day < 10) {
      day = ("0" as unknown as number) + day;
    }
    if (month < 10) {
      month = ("0" as unknown as number) + month;
    }
    this.minDate = year + "-" + month + "-" + day;
  }

  calcDate() {
    var from = (<HTMLInputElement><unknown>document.getElementById('date1')).value;
    var to = (<HTMLInputElement><unknown>document.getElementById('date2')).value;
    var startdate = new Date(from);
    var endDate = new Date(to);
    this.getDateDifference(startdate, endDate);
    this.calculateValue=true;
  }

  getDateDifference(startdate, endDate) {
    if (startdate > endDate) {
      return null;
    }
    var startYear = startdate.getFullYear();
    var startMonth = startdate.getMonth() + 1;
    var startDay = startdate.getDate();
    var endYear = endDate.getFullYear();
    var endMonth = endDate.getMonth() + 1;
    var endDay = endDate.getDate();
    var february = (endYear % 4 == 0 && endYear % 100 != 0) || endYear % 400 == 0 ? 29 : 28;
    var daysOfMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    var startDateNotPassedInEndYear = (endMonth < startMonth) || endMonth == startMonth && endDay < startDay;
    var years = endYear - startYear - (startDateNotPassedInEndYear ? 1 : 0);
    var months = (12 + endMonth - startMonth - (endDay < startDay ? 1 : 0)) % 12;
    var days = startDay <= endDay ? endDay - startDay : daysOfMonth[(12 + endMonth - 1) % 12] - startDay + endDay
    this.years = years;
    this.months = months;
    this.days = days;

  }

  onsubmit() {
    var EducationDetails = {
      addressline1: this.EducationDetails.get('addressline1').value,
      addressline2: this.EducationDetails.get('addressline2').value,
      state: this.EducationDetails.get('state').value,
      District: this.EducationDetails.get('District').value,
      constituencie: this.EducationDetails.get('constituencie').value,
      zipcode: this.EducationDetails.get('zipcode').value,
      startdate: this.EducationDetails.get('startdate').value,
      endDate: this.EducationDetails.get('endDate').value,
    }
    this.submitted = true;
    if (this.EducationDetails.valid) {
      if (this.currentIndex != undefined) {
        this.studentsDetails[this.currentIndex] = EducationDetails;
        this.currentIndex = undefined;
        this.years = null;
        this.months = null;
        this.days = null;
        this.EducationDetails.reset();
        this.submitted=false;
      } else {
        this.studentsDetails.push(EducationDetails);
        this.years = null;
        this.months = null;
        this.days = null;
        this.submitted=false;
        this.EducationDetails.reset();
      }
    }
   this.calculateValue=false;
  }

  editeducationdetails(obj, index) {
    this.currentIndex = index;
    var value = this.studentsDetails[index];
    this.EducationDetails.setValue({
      addressline1: value.addressline1,
      addressline2: value.addressline2,
      state: value.state,
      District: value.District,
      constituencie: value.constituencie,
      zipcode: value.zipcode,
      startdate: value.startdate,
      endDate: value.endDate
    });
    this.onSelectDistricts(value.state);
    this.onSelectConstituencie(value.District);
  }
}