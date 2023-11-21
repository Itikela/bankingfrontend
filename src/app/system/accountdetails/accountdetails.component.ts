import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accountdetails',
  templateUrl: './accountdetails.component.html',
  styleUrls: ['./accountdetails.component.css']
})
export class AccountdetailsComponent {
  accountNumber: string = '';
  pin: string = '';
  constructor(private router: Router) {}

  openaccountdetails()
  {
    this.router.navigate(['/operations']);
  }

}
