import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-security-view',
  templateUrl: './security-view.component.html',
  styleUrls: ['./security-view.component.css']
})
export class SecurityViewComponent {
  data:any=[]
  constructor(private api:ApiService){
    this.api.fetchSecurity().subscribe(
      (generated:any)=>{
        this.data=generated;
      }
    )
  }
}
