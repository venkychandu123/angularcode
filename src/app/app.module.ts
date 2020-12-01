import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule ,ReactiveFormsModule}from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PagenotfoundComponent } from './mydash-board/pagenotfound/pagenotfound.component';
import { RigistrationComponent } from './mydash-board/rigistration/rigistration.component';
import { HomeComponent } from './mydash-board/home/home.component';
import { UserpostComponent } from './mydash-board/userpost/userpost.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap/alert';
import { AddcustomerAddressComponent } from './mydash-board/addcustomer-address/addcustomer-address.component';
import { TextMaskModule } from 'angular2-text-mask';
import { PhonenumberFormatPipe } from './phonenumber-format.pipe';
import { AddprofileComponent } from './mydash-board/addprofile/addprofile.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavigationComponent,
    PagenotfoundComponent,
    RigistrationComponent,
    HomeComponent,
    UserpostComponent,
    AddcustomerAddressComponent,
    PhonenumberFormatPipe,
    AddprofileComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    TextMaskModule,
    ModalModule.forRoot(),
    AlertModule.forRoot(),
   
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[]
})
export class AppModule { }
