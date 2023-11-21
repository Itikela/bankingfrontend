
/*import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DepositModalComponent } from 'src/app/deposit-modal/deposit-modal.component';
import { WithdrawModalComponent } from 'src/app/withdraw-modal/withdraw-modal.component';
import { CheckBalanceModalComponent } from 'src/app/checkbalance-modal/checkbalance-modal.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent {*/
  //constructor(public dialog: MatDialog) {}

  /*openDepositModal(): void {
    const dialogRef = this.dialog.open(DepositModalComponent, {
      width: '400px', // Set the width as needed
    });

    dialogRef.afterClosed().subscribe(result => {
      // Handle result if needed
      console.log('Deposit result:', result);
    });
  }
  openWithdrawModal(): void {
    const dialogRef = this.dialog.open(WithdrawModalComponent, {
      width: '400px', // Set the width as needed
    });

    dialogRef.afterClosed().subscribe(result => {
      // Handle result if needed
      console.log('Withdraw result:', result);
    });
  }

  openCheckBalanceModal(): void {
    const dialogRef = this.dialog.open(CheckBalanceModalComponent, {
      width: '400px', // Set the width as needed
    });

    dialogRef.afterClosed().subscribe(result => {
      // Handle result if needed
      console.log('Checking balance for account:', result);
    });
  }

  handleDeposit(result: { accountNumber: string, amount: number }): void {
    // Handle withdraw result if needed
    console.log('Deposit result:', result);
  }
  handleWithdraw(result: { accountNumber: string, amount: number }): void {
    // Handle withdraw result if needed
    console.log('Withdraw result:', result);
  }
  handleCheckBalance(accountNumber: string): void {
    // You may handle the check balance result here if needed
    console.log('Checking balance for account:', accountNumber);
  }*/

  /*
  balance: number=1000;
  inputValue: number = 0;
  onClickDeposit(): void
  {
    this.balance+=+this.inputValue;
  }

  onClickWithdraw(): void
  { 
    if(this.balance>=+this.inputValue)
    {this.balance-=+this.inputValue;}
    else
    {alert("Insufficient Balance");}
  }

  onClickCheck(): void
  {
   this.balance;
  }

}*/
/*import { Component } from '@angular/core';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css'],
})
export class OperationsComponent {
  balance: number = 1000;
  inputValue: number = 0;

  onClickDeposit(): void {
    if (this.inputValue > 0) {
      this.balance += this.inputValue;
    }
  }

  onClickWithdraw(): void {
    if (this.inputValue > 0 && this.balance >= this.inputValue) {
      this.balance -= this.inputValue;
    } else {
      alert('Invalid amount or insufficient balance.');
    }
  }

  onClickCheck(): void {
    // You may not need to do anything here as the balance is automatically updated in the UI.
  }
}*/


import { Component } from '@angular/core';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent {
  depositAmount: number = 0;
  withdrawAmount: number = 0;
  balance: number = 1000; // Assuming an initial balance

  onClickDeposit(): void {
    this.balance += Number(this.depositAmount);
    this.resetInputFields();
  }

  onClickWithdraw(): void {
    if (this.withdrawAmount > 0 && this.balance >= this.withdrawAmount) {
      this.balance -= this.withdrawAmount;
    } else {
      alert('Invalid amount or insufficient balance.');
    }
    this.resetInputFields();
  }

  onClickCheck(): void {
    // No specific logic here for checking balance.
    //alert(`Current Balance: ${this.balance}`);
  }

  private resetInputFields(): void {
    this.depositAmount = 0;
    this.withdrawAmount = 0;
  }
}

