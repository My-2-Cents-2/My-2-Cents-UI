import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TrackIncomeComponent } from './track-income/track-income.component';
import { TransferMoneyComponent } from './transfer-money/transfer-money.component';
import { TrackExpensesComponent } from './track-expenses/track-expenses.component';
import { TrackMultipleAccountsComponent } from './track-multiple-accounts/track-multiple-accounts.component';
import { UserChangeInfoComponent } from './user-change-info/user-change-info.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { JwtInterceptor } from './_interceptors/jwt.interceptor';
import { EmailConfirmationComponent } from './email-confirmation/email-confirmation.component';
import { InvestmentDiversityGraphComponent } from './investment-diversity-graph/investment-diversity-graph.component';
import { InvestmentPortfolioMainComponent } from './investment-portfolio/investment-portfolio-main/investment-portfolio-main.component';
import { InvestmentPortfolioTableComponent } from './investment-portfolio/investment-portfolio-table/investment-portfolio-table.component';
import { OrderHistoryComponent } from './investment-portfolio/order-history/order-history.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InvestingComponent } from './investing/investing.component';
import { CryptoComponent } from './crypto/crypto.component';
import { StockComponent } from './stock/stock.component';
import { BudgetCalculatorComponent } from './budget-calculator/budget-calculator.component';
import { BudgetChartComponent } from './budget-chart/budget-chart.component';
import { NgChartsModule } from 'ng2-charts';
import { BudgetInfoComponent } from './budget-info/budget-info.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserProfileComponent,
    TrackIncomeComponent,
    TransferMoneyComponent,
    TrackExpensesComponent,
    TrackMultipleAccountsComponent,
    UserChangeInfoComponent,
    CreateProfileComponent,
    RegisterComponent,
    EmailConfirmationComponent,
    InvestmentDiversityGraphComponent,
    InvestmentPortfolioMainComponent,
    InvestmentPortfolioTableComponent,
    OrderHistoryComponent,
    InvestingComponent,
    CryptoComponent,
    StockComponent,
    BudgetCalculatorComponent,
    BudgetChartComponent,
    BudgetInfoComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgChartsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
