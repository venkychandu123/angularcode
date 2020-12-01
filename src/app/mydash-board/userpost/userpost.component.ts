import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MyserviceService } from 'src/app/service/myservice.service';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertComponent } from 'ngx-bootstrap/alert/alert.component';
@Component({
  selector: 'app-userpost',
  templateUrl: './userpost.component.html',
  styleUrls: ['./userpost.component.css'] 
})
export class UserpostComponent implements OnInit {
  dataList :any;
  modalRef: BsModalRef;
  user_id:number;
  alerts;

  constructor(private datafromservice:MyserviceService,private modalService: BsModalService) { }
  ngOnInit(){
    this.datafromservice.getdatafromser().subscribe(
      (res:any)=>{
        this.dataList=res;
    })
  } 

  openModal(template: TemplateRef<any>,index:number) {
    this.modalRef = this.modalService.show(template);
    this.user_id=index;
   
  }

  confirm() {
    this.modalRef.hide();
    this.dataList.splice(this.user_id,1);
    this.alerts = [{
      type: 'success',
      msg: `Post with user_id ${this.user_id+1} has been deleted successfully. (added: ${new Date().toLocaleTimeString()})`,
      timeout: 5000
    }];
  } 

  decline() {
    this.modalRef.hide();
  }  
  
  
}
