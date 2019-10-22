import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }



  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }

    // this.authService.loginUser
    //   (
    //     form.value.inputUserName,
    //     form.value.inputPassword
    //   );
  }


  ngOnInit() {
  }

}
