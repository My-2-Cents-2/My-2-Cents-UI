import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/_services/account.service';
import { observable, Observable, ReplaySubject } from 'rxjs';
import { InvestmentPortfolioService } from 'src/app/_services/investment-portfolio.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { InvestmentPortfolioTableComponent } from './investment-portfolio-table.component';
import { RouterTestingModule } from '@angular/router/testing';
import { User } from '../../_models/User';
import { CryptoAsset, StockAsset, TotalInvestment } from '../../_models/investmentPortfolio';

describe('InvestmentPortfolioTableComponent', () => {
  let component: InvestmentPortfolioTableComponent;
  let fixture: ComponentFixture<InvestmentPortfolioTableComponent>;
  let service: InvestmentPortfolioService;

  let mockCryptoAsset: CryptoAsset[] = [
    {
      currentInvestment: 10,
      initialInvestmentDate: "test",
      name: "testing",
      ownedShares: 10,
      returns: 10,
      sharePrice: 10,
      cryptoPrice: 10
    }
  ];

  let mockStockAsset: StockAsset[] = [
    {
      currentInvestment: 10,
      initialInvestmentDate: "test",
      name: "testing",
      ownedShares: 10,
      returns: 10,
      sharePrice: 10,
      stockPrice: 10
    }
  ]

  let mockTotalInvestment: TotalInvestment = {
    userInvestmentSum: 10
  }

  class InvestmentPortfolioMockService {
    getAllStockAssetByUser(userId: number) {
      return new Observable((observable) => {
        observable.next(mockStockAsset)
      })
    };

    getAllCryptoAssetByUser(userId: number) {
      return new Observable((observable) => {
        observable.next(mockCryptoAsset)
      })
    };

    getTotalInvestmentByUser(userId: number) {
      return new Observable((observable) => {
        observable.next(mockTotalInvestment)
      })
    };
    
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvestmentPortfolioTableComponent],
      providers: [{ provide: InvestmentPortfolioService, useClass: InvestmentPortfolioMockService }],
      imports: [RouterTestingModule, HttpClientTestingModule]
    })
      .compileComponents();

    service = TestBed.inject(InvestmentPortfolioService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentPortfolioTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get crypto assests by user', () => {

    component.getAllCryptoAssetsByUser(1);
    expect(component.listOfCryptoAssets).toEqual(mockCryptoAsset);
  });

  it('should get stock asset by user', () => {

    component.getAllStockAssetsByUser(1);
    expect(component.listOfStockAssets).toEqual(mockStockAsset);
  });

  it('should get total investment by user', () => {
    component.getTotalInvestmentByUser(1);
    expect(component.totalInvestment).toEqual(mockTotalInvestment);
  });

  /*it('should call ngOnInit', () => {
    const fixture = TestBed.createComponent(InvestmentPortfolioTableComponent);
    const component = fixture.debugElement.componentInstance;
    const service = fixture.debugElement.injector.get(InvestmentPortfolioService);
    let userId:number;
    component.ngOnInit();
    expect(component.Items).toEqual(userId);
  })*/
});
