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

  login(){
    this.accountService.login(this.model).subscribe(response => {
      alert("Please check your email for the 2 factor Authentication code:");
      this.router.navigate(['/twostepverification'], { queryParams: {email: this.model.username} });
    }, error => {
      console.log(error);
      this.errorMessage = error.error.result;
      this.showError = true;
    })
  }

  showPassword()
  {
    this.show = !this.show;
  }

}