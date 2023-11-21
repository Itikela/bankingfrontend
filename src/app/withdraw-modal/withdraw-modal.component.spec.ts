import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawModalComponent } from './withdraw-modal.component';

describe('WithdrawModalComponent', () => {
  let component: WithdrawModalComponent;
  let fixture: ComponentFixture<WithdrawModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WithdrawModalComponent]
    });
    fixture = TestBed.createComponent(WithdrawModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
