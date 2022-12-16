import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-emp-reg',
  templateUrl: './emp-reg.component.html',
  styleUrls: ['./emp-reg.component.css']
})
export class EmpRegComponent {
  constructor(private api:ApiService){
    localStorage.setItem("emp","1");
  }
  employeeCode=""
  name=""
  designation=""
  salary=""
  companyName=""
  mobileNumber=""
  userName=""
  password=""

  data:any={}

  readValue=()=>{
    this.data={
      "employeeCode":this.employeeCode,
      "name":this.name,
      "companyName":this.companyName,
      "designation":this.designation,
      "salary":this.salary,
      "mobileNumber":this.mobileNumber,
      "userName":this.userName,
      "password":this.password
    }
    this.api.addEmp(this.data).subscribe(
      (generated:any)=>{
        console.log(generated)
        if(generated.status=="success"){
          alert("Employee added")
          let data2:any={
    
            "emp_id" : this.employeeCode,
            "sick_leave" : 7,
            "special_leave" : 3,
            "casual_leaves" : 20
            
    }
          this.api.addTotal(data2).subscribe(
            (generated1)=>{
              console.log(generated1)
            }
          )
          this.employeeCode=""
          this.name=""
          this.designation=""
          this.salary=""
          this.companyName=""
          this.mobileNumber=""
          this.userName=""
          this.password=""
        }

      }
    )
  }
}
