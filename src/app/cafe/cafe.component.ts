import { Component, OnInit } from '@angular/core';
import { Cafe } from '../models/cafe.model';
import { CafeService } from '../services/cafe.service';

@Component({
  selector: 'app-cafe',
  templateUrl: './cafe.component.html',
  styleUrls: ['./cafe.component.css']
})
export class CafeComponent implements OnInit {

  cafes: Array<Cafe> = [];
  actorSelected?: Cafe;

  constructor(private cafeService:CafeService) { }

  getCafes(): void {
    this.cafeService.getCafes().subscribe(cafes => this.cafes = cafes);
  }
  ngOnInit(): void{
    this.getCafes();
  }

  countCafeTypes() {
    let blendCount = 0;
    let originCount = 0;

    this.cafes.forEach((cafe) => {
      if (cafe.tipo === 'Blend') {
        blendCount++;
      } else if (cafe.tipo === 'Café de Origen') {
        originCount++;
      }
    });

    return {
      blend: blendCount,
      origin: originCount
    };
  }

}
