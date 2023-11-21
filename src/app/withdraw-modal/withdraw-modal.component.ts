import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-withdraw-modal',
  templateUrl: './withdraw-modal.component.html',
  styleUrls: ['./withdraw-modal.component.css']
})
export class WithdrawModalComponent {
  accountNumberWithdraw: string = '';
  amountWithdraw: number = 0;

  @Output() withdrawEvent = new EventEmitter<{ accountNumber: string, amount: number }>();

  withdraw(): void {
    this.withdrawEvent.emit({ accountNumber: this.accountNumberWithdraw, amount: this.amountWithdraw });
  }
}

