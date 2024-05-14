import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImgService {
  constructor(private http: HttpClient) {}
  Get_img() {
    return this.http.get('assets/data/Data-of-IMG_S.json');
  }
}
