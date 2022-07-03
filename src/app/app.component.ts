import { Component } from '@angular/core';
import {FormControl, FormGroup , Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private route : ActivatedRoute){}
userId : any;
  ngOnInit() : void {
    console.warn("user id :",this.route.snapshot.paramMap.get('id'));
    this.userId=this.route.snapshot.paramMap.get('id');
  }

}
