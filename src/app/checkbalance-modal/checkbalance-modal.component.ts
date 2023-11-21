import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbalance-modal',
  templateUrl: './checkbalance-modal.component.html',
  styleUrls: ['./checkbalance-modal.component.css']
})
export class CheckBalanceModalComponent {
  accountNumberCheckBalance: string = '';
  balance: number | undefined;
  @Output() checkBalanceEvent = new EventEmitter<string>();

  checkBalance(): void {
    // You should implement the logic to fetch the balance based on the account number
    // Replace the following line with your actual service call
    this.balance = Math.random() * 1000; // Placeholder logic

    this.checkBalanceEvent.emit(this.accountNumberCheckBalance);
  }
}

