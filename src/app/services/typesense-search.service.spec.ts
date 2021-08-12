import { TestBed } from '@angular/core/testing';

import { TypesenseSearchService } from './typesense-search.service';

describe('TypesenseSearchService', () => {
  let service: TypesenseSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypesenseSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
