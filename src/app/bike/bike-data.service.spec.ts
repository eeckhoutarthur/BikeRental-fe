import { TestBed, async, inject } from '@angular/core/testing';
import { BikeDataService } from './bike-data.service';

describe('Service: BikeDate', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BikeDataService]
    });
  });

  it('should ...', inject([BikeDataService], (service: BikeDataService) => {
    expect(service).toBeTruthy();
  }));
});
