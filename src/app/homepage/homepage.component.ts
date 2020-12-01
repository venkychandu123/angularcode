import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

public  user={
  emailid:'',
  password:''

 }
  constructor(private router:Router) { }
  ngOnInit() {
  }
ErrorMessageOnsubmit;
  onsubmit(){
    if(this.user.emailid==="jupallenaresh8800@gmail.com" && this.user.password==="Naresh@123"){
    this.router.navigate(['/mydashboard']);
    localStorage.setItem("em",this.user.emailid);
    this.ErrorMessageOnsubmit=false;
    }else  {
      this.ErrorMessageOnsubmit=true;
    }
  }  
}
    