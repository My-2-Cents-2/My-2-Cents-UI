import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  model: any = {}
  users: any;

  ngForm = new FormGroup({
    username: new FormControl(""),
    password: new FormControl("")
  });

  constructor(public accountService: AccountService, private router: Router) {}

  ngOnInit(): void {}
  
  // loginWithRedirect(): void {
  //   this.auth.loginWithRedirect({
  //     appState: { target: '/dashboard' },
  //   });
  // }

  login(){
    this.accountService.login(this.model).subscribe(response => {
      this.router.navigateByUrl('/dashboard');
    }, error => {
      console.log(error);
      alert(error);
    })
  }
}
