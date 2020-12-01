import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PagenotfoundComponent } from './mydash-board/pagenotfound/pagenotfound.component';
import { RigistrationComponent } from './mydash-board/rigistration/rigistration.component';
import { HomeComponent } from './mydash-board/home/home.component';
import { UserpostComponent } from './mydash-board/userpost/userpost.component';
import{ DashboardactivateGuard } from './guard/dashboardactivate.guard'
import { pathToFileURL } from 'url';
import { AddcustomerAddressComponent } from './mydash-board/addcustomer-address/addcustomer-address.component';
import { AddprofileComponent } from './mydash-board/addprofile/addprofile.component';
const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'mydashboard',component:NavigationComponent,canActivate:[DashboardactivateGuard],children:[
  {path:"",component:HomeComponent},
  {path:"rigistrationForm",component:RigistrationComponent},
  {path:"userpost",component:UserpostComponent},
  {path:"custtomeraddress",component:AddcustomerAddressComponent},
  {path:"addprofile",component:AddprofileComponent}
    
  ]},
  {path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
