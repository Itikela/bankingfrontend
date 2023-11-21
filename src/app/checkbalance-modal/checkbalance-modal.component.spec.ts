import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBalanceModalComponent } from './checkbalance-modal.component';

describe('CheckbalanceModalComponent', () => {
  let component: CheckBalanceModalComponent;
  let fixture: ComponentFixture<CheckBalanceModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckBalanceModalComponent]
    });
    fixture = TestBed.createComponent(CheckBalanceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
