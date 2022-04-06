import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-two-step-verification',
  templateUrl: './two-step-verification.component.html',
  styleUrls: ['./two-step-verification.component.css']
})
export class TwoStepVerificationComponent implements OnInit {
  public twoStepForm: FormGroup;
  public showError: boolean;
  public errorMessage: string;
  private email: string;
  
  constructor(private accountService: AccountService, 
              private route: ActivatedRoute, 
              private router: Router) { }

  ngOnInit(): void {
    this.twoStepForm = new FormGroup({
      twoFactorCode: new FormControl('', [Validators.required]),
    });
    this.email = this.route.snapshot.queryParams['email'];
  }

  validateControl = (controlName: string) => {
    return this.twoStepForm.controls[controlName].invalid && this.twoStepForm.controls[controlName].touched
  }

  hasError = (controlName: string, errorName: string) => {
    return this.twoStepForm.controls[controlName].hasError(errorName)
  }

  public login = (twoStepFromValue) => {
    this.showError = false;
    
    const formValue = { ...twoStepFromValue };
    let twoFactorDto = {
      email: this.email,
      provider: "Email",
      token: formValue.twoFactorCode
    }

    console.log(twoFactorDto);

    this.accountService.twoStepLogin(twoFactorDto)
    .subscribe(res => {
      alert("Verify successful! Press Close to go to Dashboard");
      this.router.navigateByUrl('/dashboard');
    },
    error => {
      this.errorMessage = error;
      this.showError = true;
    })
  }

}
