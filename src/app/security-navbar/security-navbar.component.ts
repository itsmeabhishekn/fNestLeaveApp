import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-security-navbar',
  templateUrl: './security-navbar.component.html',
  styleUrls: ['./security-navbar.component.css']
})
export class SecurityNavbarComponent {

  userid:any=""
  data:any=[]
  constructor(private api:ApiService){
    this.userid=localStorage.getItem("guardinfo")
    let data1:any=  {
      "guardnumber": this.userid
  }

    api.searchSecurity(data1).subscribe(
      (generated:any)=>{
        console.log(data1)
        console.log(generated)
        this.data=generated

      }
    )
  }
}
