import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { EmpLoginComponent } from './emp-login/emp-login.component';
import { EmpRegComponent } from './emp-reg/emp-reg.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { EmployeeViewComponent } from './employee-view/employee-view.component';
import { EmpSearchComponent } from './emp-search/emp-search.component';
import { SecurityRegComponent } from './security-reg/security-reg.component';
import { SecurityViewComponent } from './security-view/security-view.component';
import { SecuritySearchComponent } from './security-search/security-search.component';
import { LeaveApplyComponent } from './leave-apply/leave-apply.component';
import { EmpNavbarComponent } from './emp-navbar/emp-navbar.component';
import { ViewLeavesComponent } from './view-leaves/view-leaves.component';
import { LeaveStatusEmpComponent } from './leave-status-emp/leave-status-emp.component';
import { SecurityLoginComponent } from './security-login/security-login.component';
import { EmpCheckinComponent } from './emp-checkin/emp-checkin.component';
import { SecurityNavbarComponent } from './security-navbar/security-navbar.component';
import { CheckinViewComponent } from './checkin-view/checkin-view.component';
import { ProfileEmployeeComponent } from './profile-employee/profile-employee.component';
import { SecurityProfileComponent } from './security-profile/security-profile.component';
import { GuestRegComponent } from './guest-reg/guest-reg.component';
import { GuestViewsComponent } from './guest-views/guest-views.component';
import { GuestAdminComponent } from './guest-admin/guest-admin.component';

const myRoute:Routes=[
  {
    path:"",
    component:AdminLoginComponent

  },{
    path:"employee",
    component:EmpLoginComponent

  },{
    path:"add",
    component:EmpRegComponent

  },{
    path:"view",
    component:EmployeeViewComponent

  },{
    path:"search",
    component:EmpSearchComponent

  },{
    path:"addGuard",
    component:SecurityRegComponent

  },{
    path:"viewGuard",
    component:SecurityViewComponent

  },{
    path:"searchGuard",
    component:SecuritySearchComponent

  },{
    path:"addLeaves",
    component:LeaveApplyComponent

  },{
    path:"viewLeaves",
    component:LeaveStatusEmpComponent

  },{
    path:"Leaves",
    component:ViewLeavesComponent

  },{
    path:"guard",
    component:SecurityLoginComponent

  },{
    path:"checkin",
    component:EmpCheckinComponent

  },{
    path:"searchCheckin",
    component:CheckinViewComponent

  },{
    path:"profile",
    component:ProfileEmployeeComponent

  },{
    path:"securityProfile",
    component:SecurityProfileComponent

  },{
    path:"guest",
    component:GuestRegComponent

  },{
    path:"viewguest",
    component:GuestViewsComponent

  },{
    path:"viewadminguest",
    component:GuestAdminComponent

  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    EmpLoginComponent,
    EmpRegComponent,
    AdminNavbarComponent,
    EmployeeViewComponent,
    EmpSearchComponent,
    SecurityRegComponent,
    SecurityViewComponent,
    SecuritySearchComponent,
    LeaveApplyComponent,
    EmpNavbarComponent,
    ViewLeavesComponent,
    LeaveStatusEmpComponent,
    SecurityLoginComponent,
    EmpCheckinComponent,
    SecurityNavbarComponent,
    CheckinViewComponent,
    ProfileEmployeeComponent,
    SecurityProfileComponent,
    GuestRegComponent,
    GuestViewsComponent,
    GuestAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
