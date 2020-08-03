import { TestBed } from '@angular/core/testing';

import { DisneyCharacterResolverService } from './disney-character-resolver.service';

describe('DisneyCharacterResolverService', () => {
  let service: DisneyCharacterResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisneyCharacterResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
