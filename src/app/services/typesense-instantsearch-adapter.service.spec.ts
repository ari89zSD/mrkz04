import { TestBed } from '@angular/core/testing';

import { TypesenseInstantsearchAdapterService } from './typesense-instantsearch-adapter.service';

describe('TypesenseInstantsearchAdapterService', () => {
  let service: TypesenseInstantsearchAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypesenseInstantsearchAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
