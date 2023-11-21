
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-deposit-modal',
  templateUrl: './deposit-modal.component.html',
  styleUrls: ['./deposit-modal.component.css']
})
export class DepositModalComponent {
  accountNumber: string = '';
  amount: number = 0;

  @Output() depositEvent = new EventEmitter<{ accountNumber: string, amount: number }>();

  deposit(): void {
    this.depositEvent.emit({ accountNumber: this.accountNumber, amount: this.amount });
  }
}
