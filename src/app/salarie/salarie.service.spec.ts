import { TestBed, inject } from '@angular/core/testing';

import { SalarieService } from './salarie.service';

describe('SalarieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SalarieService]
    });
  });

  it('should be created', inject([SalarieService], (service: SalarieService) => {
    expect(service).toBeTruthy();
  }));
});
