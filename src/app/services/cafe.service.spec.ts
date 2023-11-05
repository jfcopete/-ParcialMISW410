import { TestBed } from '@angular/core/testing';
import { CafeService } from './cafe.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Cafe } from '../models/cafe.model';
import { environment } from 'src/environments/environment.development';

describe('CafeService', () => {
  let service: CafeService;
  let httpTestingController: HttpTestingController;
  let mockCafes: Cafe[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CafeService]
    });

    service = TestBed.inject(CafeService);
    httpTestingController = TestBed.inject(HttpTestingController);

    mockCafes = [
      new Cafe(1, 'Espresso', 'Blend', 'Italy', 'Intenso', 1200, 'espresso.png'),
      new Cafe(2, 'Colombian', 'Café de Origen', 'Colombia', 'Suave', 1800, 'colombian.png'),
      new Cafe(3, 'Ethiopian', 'Café de Origen', 'Ethiopia', 'Floral', 2000, 'ethiopian.png')
    ];
  });

  afterEach(() => {
    httpTestingController.verify(); // Verifies that no requests are outstanding.
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get cafes from the API', () => {
    service.getCafes().subscribe((cafes) => {
      expect(cafes.length).toBe(3);
      expect(cafes).toEqual(mockCafes);
    });

    const req = httpTestingController.expectOne({
      method: 'GET',
      url: `${environment.baseUrl}`,
    });

    req.flush(mockCafes);
  });

  // Add more tests as needed...
});
