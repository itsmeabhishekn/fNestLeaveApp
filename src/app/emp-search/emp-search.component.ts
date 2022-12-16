import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-emp-search',
  templateUrl: './emp-search.component.html',
  styleUrls: ['./emp-search.component.css']
})
export class EmpSearchComponent {
  employeeCode=""

  data1:any=[]
  constructor(private api:ApiService){
    this.api.fetchEmployee().subscribe(
      (generated:any)=>{
        this.data1=generated;
      }
      )
    }

      
  searchE=()=>{
    let data={
      "employeeCode":this.employeeCode
    }
    this.api.searchEmployee(data).subscribe(
      (generated:any)=>{
        if(generated.length!=0){
        console.log(generated)
        this.data1=generated}
        else{
          alert("invalid")
        }

      }
    )

  }
  deleteBtnClick=(id:any)=>{
    let data:any={"id":id}
    this.api.deleteEmployee(data).subscribe(
      (generated:any)=>{
        console.log(generated)
        if(generated.status=="success"){
          alert("deleted successfully")
          this.data1=[]
        }
      }
    )
  }
    }

 

