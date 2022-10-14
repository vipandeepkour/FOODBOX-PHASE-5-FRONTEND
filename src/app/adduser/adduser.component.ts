import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
user:User=new User();
registerForm:FormGroup;
submitted:boolean=false;
  constructor(private builder:FormBuilder) { }

  ngOnInit(): void {
    this .registrationForm=this.builder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators,required,Validators.minLength(8)]],
    )}

}
