import { TestBed } from '@angular/core/testing';

import { BankDataRepoService } from './bank-data-repo.service';

describe('BankDataRepoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BankDataRepoService = TestBed.get(BankDataRepoService);
    expect(service).toBeTruthy();
  });
});
