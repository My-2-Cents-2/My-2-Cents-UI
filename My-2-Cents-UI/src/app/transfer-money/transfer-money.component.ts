import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Account } from '../account';
<<<<<<< HEAD
import { TransferService } from '../transfer-service';
=======
// import { TransferService } from '../transfer-service';
>>>>>>> c60b5fb1badbe7544a399945d8ebada9f19f49d3

@Component({
  selector: 'app-transfer-money',
  templateUrl: './transfer-money.component.html',
  styleUrls: ['./transfer-money.component.css'],
})
export class TransferMoneyComponent implements OnInit {
  account: Account[] = [];
  funds: boolean = true;

<<<<<<< HEAD
  accounts: Account[] = [];
  funds: boolean = true;

  @Output() fromAccount = new EventEmitter<string>();
  @Output() toAccount = new EventEmitter<string>();
  @Output() quantity = new EventEmitter<number>();

  constructor() { }
=======
  @Output() fromAccount = new EventEmitter<string>();
  @Output() toAccount = new EventEmitter<string>();
  @Output() quantity = new EventEmitter<number>();
>>>>>>> c60b5fb1badbe7544a399945d8ebada9f19f49d3

  constructor() {}

<<<<<<< HEAD
  CheckFunds(fromAccount: number, toAccount: number, quantity: number) {
    
    if (+this.accounts[+fromAccount].TotalBalance < quantity) {
      this.funds = false;
    } else {
      this.TransferFunds(+fromAccount, +toAccount, quantity);
    }
  }

  TransferFunds(fromAccount: number, toAccount: number, quantity: number) : void {
    this.transactionService.TransferFunds(fromAccount, toAccount, quantity);

  }

}
=======
  ngOnInit(): void {}
}
>>>>>>> c60b5fb1badbe7544a399945d8ebada9f19f49d3
