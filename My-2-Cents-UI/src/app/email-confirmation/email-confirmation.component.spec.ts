import { HttpParams } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { observable, Observable } from 'rxjs';
import { AccountService } from '../_services/account.service';
import { CustomEncoder } from '../_services/encoder';

import { EmailConfirmationComponent } from './email-confirmation.component';

describe('EmailConfirmationComponent', () => {
  let component: EmailConfirmationComponent;
  let fixture: ComponentFixture<EmailConfirmationComponent>;
  let service: AccountService;

  let mockConfirmEmail = {
    
  };

  class AccountMockService{
    confirmEmail = (token: string, email: string) => {
      let params = new HttpParams({ encoder: new CustomEncoder() })
      params = params.append('email', email);
      params = params.append('token', token);
  
      return new Observable((observable) => {
        observable.next(mockConfirmEmail)
      })
    };
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailConfirmationComponent ],
      providers: [{provide: AccountService, useClass: AccountMockService}],
      imports: [RouterTestingModule]
    })
    .compileComponents();

    service = TestBed.inject(AccountService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
