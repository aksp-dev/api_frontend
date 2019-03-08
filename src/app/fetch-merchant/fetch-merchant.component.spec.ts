import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchMerchantComponent } from './fetch-merchant.component';

describe('FetchMerchantComponent', () => {
  let component: FetchMerchantComponent;
  let fixture: ComponentFixture<FetchMerchantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchMerchantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchMerchantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
