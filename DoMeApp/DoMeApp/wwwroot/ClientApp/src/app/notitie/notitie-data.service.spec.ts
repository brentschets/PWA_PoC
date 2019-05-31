import { TestBed } from '@angular/core/testing';

import { NotitieDataService } from './notitie-data.service';

describe('notitieDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotitieDataService = TestBed.get(NotitieDataService);
    expect(service).toBeTruthy();
  });
});
