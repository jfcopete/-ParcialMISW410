// cafe.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CafeComponent } from './cafe.component';
import { CafeService } from '../services/cafe.service';
import { Observable, of } from 'rxjs';
import { Cafe } from '../models/cafe.model';

// Create a mock CafeService
class MockCafeService {
    getCafes(): Observable<Cafe[]> {
        return of([
          new Cafe(1, 'Espresso', 'Blend', 'Italy', 'Intenso', 1200, 'espresso.png'),
          new Cafe(2, 'Colombian', 'Café de Origen', 'Colombia', 'Suave', 1800, 'colombian.png'),
          new Cafe(3, 'Ethiopian', 'Café de Origen', 'Ethiopia', 'Floral', 2000, 'ethiopian.png')
        ]);
      }
}

describe('CafeComponent', () => {
  let component: CafeComponent;
  let fixture: ComponentFixture<CafeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CafeComponent ],
      providers: [
        { provide: CafeService, useClass: MockCafeService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have exactly three cafe items', () => {
    component.getCafes();
    expect(component.cafes.length).toBe(3);
  });

  it('should have a table with four rows (three for data + one header)', () => {
    fixture.detectChanges(); // trigger data binding
    const tableRows = fixture.nativeElement.querySelectorAll('tr');
    expect(tableRows.length).toBe(4); // 3 data rows + 1 header row
  });

  // Add more tests as needed...
});
