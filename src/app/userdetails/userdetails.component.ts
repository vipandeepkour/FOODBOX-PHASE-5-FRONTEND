import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this .registrationForm=this.builder.group({
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators,required,Validators.minLength(8)]],
      phoneno:['',[Validators,required,Validators.minLength(10)]],
      address:['',[Validators,required,Validators.minLength(20)]],
    })
  }
  get forms(){

  }

}
