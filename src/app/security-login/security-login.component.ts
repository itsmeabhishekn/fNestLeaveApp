import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-security-login',
  templateUrl: './security-login.component.html',
  styleUrls: ['./security-login.component.css']
})
export class SecurityLoginComponent {
  constructor(private api:ApiService,private router:Router){}
  userName=""
  password=""
  data1:any=[]
  works=()=>{
    let data:any={
      "userName":this.userName,
      "password":this.password
    }
    this.api.getSecurityPassword(data).subscribe(
      (generated:any)=>{
        this.data1=generated
        console.log(this.data1)
        if(generated.status=="success"){
          localStorage.setItem("nav","1")
          console.log(this.data1.guardnumber)

          localStorage.setItem("guardinfo",this.data1.guardnumber)
          console.log(localStorage.getItem("guardinfo"))
          this.router.navigate(['/checkin'])
         
        }else{
          alert("invalid password")
        }
      }
    )


  }
}
