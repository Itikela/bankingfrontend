import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SystemComponent } from './system/system.component';
import { SignupComponent } from './system/signup/signup.component';
import { MaterialModule } from './material.module';
import { SignInComponent } from './system/signin/signin.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './modal/modal/modal.component';
import { AccountdetailsComponent } from './system/accountdetails/accountdetails.component';
import { OperationsComponent } from './system/operations/operations.component';
import { DepositModalComponent } from './deposit-modal/deposit-modal.component';
import { WithdrawModalComponent } from './withdraw-modal/withdraw-modal.component';
import { CheckBalanceModalComponent } from './checkbalance-modal/checkbalance-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SystemComponent,
    SignupComponent,
    WithdrawModalComponent,
    CheckBalanceModalComponent,
    DepositModalComponent,
    SignInComponent,
    ModalComponent,
    AccountdetailsComponent,
    OperationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
