import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneskyTransactionComponent } from './onesky-transaction.component';

describe('OneskyTransactionComponent', () => {
  let component: OneskyTransactionComponent;
  let fixture: ComponentFixture<OneskyTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneskyTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneskyTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
