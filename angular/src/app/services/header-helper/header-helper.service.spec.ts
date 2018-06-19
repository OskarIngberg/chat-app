import { TestBed, inject } from '@angular/core/testing';

import { HeaderHelperService } from './header-helper.service';

describe('HeaderHelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeaderHelperService]
    });
  });

  it('should be created', inject([HeaderHelperService], (service: HeaderHelperService) => {
    expect(service).toBeTruthy();
  }));
});
