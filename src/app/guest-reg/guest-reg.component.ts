import { Component } from '@angular/core';
import { generate } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-guest-reg',
  templateUrl: './guest-reg.component.html',
  styleUrls: ['./guest-reg.component.css']
})
export class GuestRegComponent {
  constructor(private api:ApiService){}
  guest_id=""
  name=""
  address=""
  readValue=()=>{
    let data=
    {
        
        "guest_id" : this.guest_id,
        "name" : this.name,
        "address" : this.address
    }
    console.log(data)
    this.api.addGuest(data).subscribe(
      (generated:any)=>{
        if(generated.status=="success"){
          alert("guest registered")
          window.location.reload();
        }
      }
    )

  }

}
