import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent {
  data:any=[]
  constructor(private api:ApiService){
    this.api.fetchEmployee().subscribe(
      (generated:any)=>{
        this.data=generated;
      }
    )
  }
}
