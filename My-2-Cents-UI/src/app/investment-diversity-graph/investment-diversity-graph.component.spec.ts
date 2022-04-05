import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgChartsModule } from 'ng2-charts';
import { Observable, observable } from 'rxjs';
import { Account } from '../_models/account';
import { CryptoAsset, StockAsset } from '../_models/investmentPortfolio';
import { My2CentsService } from '../_services/my2-cents.service';

import { InvestmentDiversityGraphComponent } from './investment-diversity-graph.component';

describe('InvestmentDiversityGraphComponent', () => {
  let component: InvestmentDiversityGraphComponent;
  let fixture: ComponentFixture<InvestmentDiversityGraphComponent>;

  let dummyAccountData: Account[] = 
  [{
      accountID: 10,
      totalBalance: 100,
      accountType: "Checking",
      interest: 5
  }];

  let dummyStockData: StockAsset[] = 
  [{
      name: "dummyData",
      initialInvestmentDate: "10/10/1010",
      currentInvestment: 100,
      ownedShares: 5,
      sharePrice: 20,
      returns: 0,
      stockPrice: 100
  }];

  let dummyCryptoData: CryptoAsset[] = 
  [{
      name: "dummyData",
      initialInvestmentDate: "10/10/1010",
      currentInvestment: 5,
      ownedShares: 5,
      sharePrice: 1,
      returns: 0,
      cryptoPrice: 5
  }];

  class AccountStockCryptoMockService
  {
    getAllAccountAsset(){return new Observable((observable) => {observable.next(dummyAccountData)})};
    getAllStockAsset(){return new Observable((observable) => {observable.next(dummyStockData)})};
    getAllCryptoAsset(){return new Observable((observable) => {observable.next(dummyCryptoData)})};
  }

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestmentDiversityGraphComponent ],
      imports: [ NgChartsModule, HttpClientTestingModule, RouterTestingModule ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentDiversityGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('should call ngOnInit', () => {
    const fixture = TestBed.createComponent(InvestmentDiversityGraphComponent);
    const component = fixture.debugElement.componentInstance;
    const service = fixture.debugElement.injector.get(My2CentsService);
    
    let listOfData:number[];
    let mockService: AccountStockCryptoMockService;
    
    component.ngOnInit();
    expect(component.Items).toEqual(listOfData);
  })

});
