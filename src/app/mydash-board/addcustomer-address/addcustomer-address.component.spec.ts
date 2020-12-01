import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcustomerAddressComponent } from './addcustomer-address.component';

describe('AddcustomerAddressComponent', () => {
  let component: AddcustomerAddressComponent;
  let fixture: ComponentFixture<AddcustomerAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcustomerAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcustomerAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
