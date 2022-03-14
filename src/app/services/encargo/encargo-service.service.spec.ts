import { TestBed } from '@angular/core/testing';
import { EncargoServiceService } from './encargo-service.service';


describe('EncargoServiceService', () => {
  let service: EncargoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncargoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy(EncargoServiceService);
  });
});