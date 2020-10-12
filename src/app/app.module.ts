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


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavigationComponent,
    PagenotfoundComponent,
    RigistrationComponent,
    HomeComponent,
    UserpostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
