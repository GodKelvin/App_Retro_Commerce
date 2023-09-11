import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  dataLogin = {
    email: "",
    senha: ""
  }
  constructor() { }

  ngOnInit() {
  }

  login(){
    console.log(this.dataLogin.email, this.dataLogin.senha);
    console.log(this.dataLogin)
  }

}
