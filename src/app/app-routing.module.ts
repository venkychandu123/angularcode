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
const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'navigation',component:NavigationComponent,canActivate:[DashboardactivateGuard],children:[
  {path:"",component:HomeComponent},
  {path:"rigistrationForm",component:RigistrationComponent},
  {path:"userpost",component:UserpostComponent}
    
  ]},
  {path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
