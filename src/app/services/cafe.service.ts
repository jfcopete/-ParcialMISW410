import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Cafe } from '../models/cafe.model';
import { HttpClient } from '@angular/common/http';

@Injectable(
    {providedIn: 'root'}
)
export class CafeService {

private readonly apiUrl = `${environment.baseUrl}`;
constructor(private http: HttpClient) { }
getCafes() : Observable<Cafe[]> {
  return this.http.get<Cafe[]>(this.apiUrl);
}
}
