import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  model: any = {}
  users: any;
  public errorMessage: string = '';
  public showError: boolean;
  show:boolean = false;

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
      // alert(error);
      this.errorMessage = error.error.result;
      this.showError = true;
      // alert("Username or Password is incorrect!");
    })
  }

  showPassword()
  {
    this.show = !this.show;
  }

}