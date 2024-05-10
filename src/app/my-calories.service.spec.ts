import { TestBed } from '@angular/core/testing';

import { MyCaloriesService } from './my-calories.service';

describe('MyCaloriesService', () => {
  let service: MyCaloriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyCaloriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
