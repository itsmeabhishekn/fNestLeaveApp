import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getPassword=(value:any)=>{
    return this.http.post("http://localhost:8080/emplogin",value)

  }
  addEmp=(value:any)=>{
    return this.http.post("http://localhost:8080/addemp",value)
  }
  fetchEmployee=()=>{
    return this.http.get("http://localhost:8080/empview")
  }
  searchEmployee=(value:any)=>{
    return this.http.post("http://localhost:8080/empsearch",value)
  }
  deleteEmployee=(value:any)=>{
    return this.http.post("http://localhost:8080/empdelete",value)
  }

  addSec=(value:any)=>{
    return this.http.post("http://localhost:8080/addGuard",value)
  }
  fetchSecurity=()=>{
    return this.http.get("http://localhost:8080/viewGuard")
  }
  searchSecurity=(value:any)=>{
    return this.http.post("http://localhost:8080/searchGuard",value)
  }
  deleteSecurity=(value:any)=>{
    return this.http.post("http://localhost:8080/deleteGuard",value)
  }
  addTotal=(value:any)=>{
    return this.http.post("http://localhost:8080/addTotal",value)
  }
  searchTotal=(value:any)=>{
    return this.http.post("http://localhost:8080/searchTotal",value)
  }
  addLeaves=(value:any)=>{
    return this.http.post("http://localhost:8080/addLeaves",value)
  }

  viewLeaves=(value:any)=>{
    return this.http.post("http://localhost:8080/searchLeaves",value)
  }
  viewLeaves2=()=>{
    return this.http.get("http://localhost:8080/Leaves")
  }
  editTotal=(value:any)=>{
    return this.http.post("http://localhost:8080/editTotal",value)
  }
  editLeaves=(value:any)=>{
    return this.http.post("http://localhost:8080/editLeaves",value)
  }
  getSecurityPassword=(value:any)=>{
    return this.http.post("http://localhost:8080/loginGuard",value)

  }
  checkinLog=(value:any)=>{
    return this.http.post("http://localhost:8080/addLog",value)
  }
  checkoutLog=(value:any)=>{
    return this.http.post("http://localhost:8080/editLog",value)
  }
  searchLog=(value:any)=>{
    return this.http.post("http://localhost:8080/dateLog",value)
  }
  fetchLeaves=()=>{
    return this.http.get("http://localhost:8080/viewLeavesEmp")
  }
  addGuest=(value:any)=>{
    return this.http.post("http://localhost:8080/addguest",value)
  }
  fetchGuest=()=>{
    return this.http.get("http://localhost:8080/viewGuest")
  }
  checkinGuest=(value:any)=>{
    return this.http.post("http://localhost:8080/addGuestLog",value)
  }
  checkoutGuest=(value:any)=>{
    return this.http.post("http://localhost:8080/editGuestLog",value)
  }
  searchGuest=(value:any)=>{
    return this.http.post("http://localhost:8080/guestLogDate",value)
  }
  
}
