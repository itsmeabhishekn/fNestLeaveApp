import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-guest-admin',
  templateUrl: './guest-admin.component.html',
  styleUrls: ['./guest-admin.component.css']
})
export class GuestAdminComponent {
  date=""

  data1:any=[]
  constructor(private api:ApiService){
    }

      
  searchE=()=>{
    let data={
      "date":this.date
    }
    this.api.searchGuest(data).subscribe(
      (generated:any)=>{
        if(generated.length!=0){

        this.data1=generated
        console.log(this.data1)
      }
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
