import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerMode = false;
  model: any = {}
  registerForm: FormGroup;
  submitted = false;
  show: boolean = false;

  constructor(private accountService: AccountService, 
              private router: Router, 
              private fb: FormBuilder) {this.submitted = false;}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(){
    this.registerForm = this.fb.group({
        username:['', Validators.required],
        email: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6), Validators.pattern("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[@$!%*#?&]).{6,}$")]],
        confirmPassword: ['', [Validators.required, this.matchValues('password')]]
    })
    this.registerForm.controls['password'].valueChanges.subscribe(()=>{
        this.registerForm.controls['confirmPassword'].updateValueAndValidity();
    })
  }

  matchValues(matchTo: string): ValidatorFn {
      return (control: AbstractControl) => {
        return control?.value === control?.parent?.controls[matchTo].value 
            ? null : { isMatching: true}
      }
  }

  register(){
    this.submitted = true;
    console.log(this.registerForm.value, this.submitted);
    this.accountService.register(this.registerForm.value).subscribe(response => {
      alert("Register Successful! Please verify your email confirmation!");
      this.router.navigateByUrl('')
      console.log(response);
    }, error => {
      console.log(error, this.submitted);
      alert(error.error.result);
    })
  }

  showPassword()
  {
    this.show = !this.show;
  }
}
