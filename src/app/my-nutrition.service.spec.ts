import { TestBed } from '@angular/core/testing';

import { NutritionService } from './my-nutrition.service';

describe('MyNutritionService', () => {
  let service: NutritionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NutritionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
