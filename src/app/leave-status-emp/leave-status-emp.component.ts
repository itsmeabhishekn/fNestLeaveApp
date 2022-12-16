import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-leave-status-emp',
  templateUrl: './leave-status-emp.component.html',
  styleUrls: ['./leave-status-emp.component.css']
})
export class LeaveStatusEmpComponent {
  data:any=[]

  constructor(private api:ApiService){
    let data1:any={
    
      "empid" : localStorage.getItem("empinfo")

}

    this.api.viewLeaves(data1).subscribe(
      (generatedValue)=>{
        this.data=generatedValue
      }
    )
  
  }
}
