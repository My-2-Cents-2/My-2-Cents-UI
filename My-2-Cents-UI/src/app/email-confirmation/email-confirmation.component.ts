import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-email-confirmation',
  templateUrl: './email-confirmation.component.html',
  styleUrls: ['./email-confirmation.component.css']
})
export class EmailConfirmationComponent implements OnInit {
  public showSuccess: boolean;
  public showError: boolean;
  public errorMessage: string;

  constructor(private accountService: AccountService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.confirmEmail();
  }

  private confirmEmail = () => {
    this.showError = this.showSuccess = false;
    const token = this.route.snapshot.queryParams['token'];
    const email = this.route.snapshot.queryParams['email'];
    console.log(token);
    this.accountService.confirmEmail(token, email)
    .subscribe(_ => {
      this.showSuccess = true;
    },
    error => {
      this.showError = true;
      this.errorMessage = error.error.results;
    })
  }
}
