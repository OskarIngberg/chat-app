import { TestBed, inject } from '@angular/core/testing';

import { HeightSetterService } from './height-setter.service';

describe('HeightSetterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeightSetterService]
    });
  });

  it('should be created', inject([HeightSetterService], (service: HeightSetterService) => {
    expect(service).toBeTruthy();
  }));
});
