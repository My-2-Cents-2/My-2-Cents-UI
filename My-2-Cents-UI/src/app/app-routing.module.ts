import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TrackMultipleAccountsComponent } from './track-multiple-accounts/track-multiple-accounts.component';
import { TrackIncomeComponent } from './track-income/track-income.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_authGuards/auth.guard';
import { EmailConfirmationComponent } from './email-confirmation/email-confirmation.component';
import { InvestmentPortfolioMainComponent } from './investment-portfolio/investment-portfolio-main/investment-portfolio-main.component';
import { BudgetCalculatorComponent } from './budget-calculator/budget-calculator.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/login',
  //   pathMatch: 'full',
  // },
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'emailconfirmation', component: EmailConfirmationComponent },
  { path: 'dashboard', component: TrackMultipleAccountsComponent, canActivate: [AuthGuard] },
  { path: 'track-income/:AccountID', component: TrackIncomeComponent, canActivate: [AuthGuard] },
  { path: 'create-profile', component: CreateProfileComponent, canActivate: [AuthGuard] },
  { path: 'investment-portfolio', component: InvestmentPortfolioMainComponent, canActivate: [AuthGuard] },
  { path: 'budget-calculator', component: BudgetCalculatorComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }