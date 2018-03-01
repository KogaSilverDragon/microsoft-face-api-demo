import { TestBed, inject } from '@angular/core/testing';

import { MscsFaceApiService } from './mscs-face-api.service';

describe('MscsFaceApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MscsFaceApiService]
    });
  });

  it('should be created', inject([MscsFaceApiService], (service: MscsFaceApiService) => {
    expect(service).toBeTruthy();
  }));
});
