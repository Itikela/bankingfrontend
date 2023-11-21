

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemComponent } from './system/system.component';
import { SignInComponent } from './system/signin/signin.component';
import { SignupComponent } from './system/signup/signup.component';
import { DepositModalComponent } from './deposit-modal/deposit-modal.component';
import { WithdrawModalComponent } from './withdraw-modal/withdraw-modal.component';
import { CheckBalanceModalComponent } from './checkbalance-modal/checkbalance-modal.component';

import { AccountdetailsComponent } from './system/accountdetails/accountdetails.component';
import { OperationsComponent } from './system/operations/operations.component';
const routes: Routes = [
  { path: '', component: SystemComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'accountdetails', component: AccountdetailsComponent },
  { path: 'operations', component: OperationsComponent},
  { path: 'deposit', component: DepositModalComponent },
  { path: 'withdraw', component: WithdrawModalComponent },
  { path: 'checkbalance', component: CheckBalanceModalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


