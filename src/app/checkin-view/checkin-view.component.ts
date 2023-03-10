import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-checkin-view',
  templateUrl: './checkin-view.component.html',
  styleUrls: ['./checkin-view.component.css']
})
export class CheckinViewComponent {
  date=""
emp:any=""
  data1:any=[]
  constructor(private api:ApiService){
    this.emp=localStorage.getItem("emp")
    console.log(this.emp)
    }

      
  searchE=()=>{
    let data={
      "date":this.date
    }
    this.api.searchLog(data).subscribe(
      (generated:any)=>{
        if(generated.length!=0){

        this.data1=generated
        console.log(this.data1)
      }
        else{
          alert("no checkins")
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
