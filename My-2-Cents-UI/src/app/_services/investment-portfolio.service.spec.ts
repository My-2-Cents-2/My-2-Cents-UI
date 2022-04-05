import { TestBed } from '@angular/core/testing';

import { InvestmentPortfolioService } from './investment-portfolio.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CryptoAsset, CryptoOrder, StockAsset } from 'src/app/_models/investmentPortfolio';

describe('InvestmentPortfolioService', () => {
  let service: InvestmentPortfolioService;
  let httpMock: HttpTestingController;

  let dummyCrypto:CryptoAsset[] = [
    {
      name: "Bitcoin",
      initialInvestmentDate: "03/31/2022",
      currentInvestment: 100,
      ownedShares: 2,
      sharePrice: 50,
      returns: 3,
      cryptoPrice: 300
    }
  ];

  let dummyCrptoOrder:CryptoOrder[] =[
    {
      name: "Dogecoin",
      currentInvestment: 100,
      initialInvestmentDate: "04/01/2022",
      ownedShares: 450,
      transactionType: "Buy"
    }
  ]

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        InvestmentPortfolioService
      ]
    });
    service = TestBed.inject(InvestmentPortfolioService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get crypto assets', () => {
    service.getAllCryptoAssetByUser(1).subscribe((response) => {
      expect(response[0].name.toBe(dummyCrypto[0].name));
    });

    const httpReq = httpMock.expectOne("https://localhost:7106/api/CryptoPortfolio/GetCryptoAssetTable?_userID=1");
    expect(httpReq.request.method).toBe("GET");
    httpReq.flush(dummyCrypto);
  });

  it('should get crypto order history', () => {
    service.getAllCryptoOrderHistoryByUser(1).subscribe((response) => {
      expect(response[0].name.toBe(dummyCrptoOrder[0].name));
    });

    const httpReq = httpMock.expectOne("https://localhost:7106/api/CryptoPortfolio/GetCryptoOrderhistoryTable?_userID=1");
    expect(httpReq.request.method).toBe("GET");
    httpReq.flush(dummyCrptoOrder);
  });

  it('should get totalinvestment', () => {
    service.getTotalInvestmentByUser(1).subscribe((response) => {
      expect(response.toBe(10));
    });

    const httpReq = httpMock.expectOne("https://localhost:7106/api/UserPortfolio/UserInvestmentSum/1");
    expect(httpReq.request.method).toBe("GET");
    httpReq.flush(10);
  }) 
});
