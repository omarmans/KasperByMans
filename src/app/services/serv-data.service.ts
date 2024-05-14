import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServDataService {
  constructor(private http: HttpClient) {}
  Get_data(): Observable<any> {
    return this.http.get('assets/data/Data-of-Serv.json');
  }
}
