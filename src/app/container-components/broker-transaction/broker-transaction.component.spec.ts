import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerTransactionComponent } from './broker-transaction.component';

describe('BrokerTransactionComponent', () => {
  let component: BrokerTransactionComponent;
  let fixture: ComponentFixture<BrokerTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrokerTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokerTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
