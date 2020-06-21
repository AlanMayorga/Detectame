import { TestBed } from '@angular/core/testing';

import { CustomVisionService } from './custom-vision.service';

describe('CustomVisionService', () => {
  let service: CustomVisionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomVisionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
