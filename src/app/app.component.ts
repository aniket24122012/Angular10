import { Component } from '@angular/core';

import { APIService } from './services/api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users:any;
   constructor(private userdata : APIService)
   {
    userdata.getUser().subscribe(
      (data)=>{
        this.users=data;
      }
    );

   }
  ngOnInit() : void {
   
  }

}
