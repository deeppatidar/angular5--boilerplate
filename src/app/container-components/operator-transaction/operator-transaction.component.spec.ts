import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorTransactionComponent } from './operator-transaction.component';

describe('OperatorTransactionComponent', () => {
  let component: OperatorTransactionComponent;
  let fixture: ComponentFixture<OperatorTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatorTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
