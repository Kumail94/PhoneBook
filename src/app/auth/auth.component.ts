import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  errorMessage: string;
  LoggedIn = true;
  constructor(private _route: Router , private _activate : ActivatedRoute) { }

  ngOnInit() {
    console.log("Auth Component");
  }
  onSubmit(form: NgForm) {
    if(!form.valid){
      return;
    }
    const UserName = form.value.username;
    const UserPassword = form.value.userpassword;
    if (UserName === "admin" && UserPassword === "test123") {
  //  this.LoggedIn = true;
      console.log(UserName);
      console.log(UserPassword);
      this._route.navigate(['ContactDetails']);
    } else {
      this.LoggedIn = false;
      this.errorMessage = "Username or Password is In-valid!";
      console.log(UserName);
      console.log(UserPassword);
    }
    form.resetForm();

  }
}
