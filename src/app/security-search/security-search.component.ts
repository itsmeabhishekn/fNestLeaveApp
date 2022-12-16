import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-security-search',
  templateUrl: './security-search.component.html',
  styleUrls: ['./security-search.component.css']
})
export class SecuritySearchComponent {
  guardnumber=""

  data1:any=[]
  constructor(private api:ApiService){
    this.api.fetchSecurity().subscribe(
      (generated:any)=>{
        this.data1=generated;
      }
      )
    }

      
  searchS=()=>{
    let data={
      "guardnumber":this.guardnumber
    }
    this.api.searchSecurity(data).subscribe(
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
    this.api.deleteSecurity(data).subscribe(
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
