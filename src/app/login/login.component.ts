import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isProcessing: boolean = false;

  constructor() { }

  ngOnInit() { }

  _loginWithGoogle() {

  }

  _loginWithFacebook() {
    
  }

  _loginWithGithub() {
    
  }

}
