import { TestBed } from '@angular/core/testing';

import { AddprofileServiceService } from './addprofile-service.service';

describe('AddprofileServiceService', () => {
  let service: AddprofileServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddprofileServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
