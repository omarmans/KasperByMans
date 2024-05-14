import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  constructor(private http: HttpClient) {}
  Get_Data() {
    return this.http.get('assets/data/Skills/Skills.json');
  }
  get_Testimonials() {
    return this.http.get('assets/data/Skills/Testimonials.json');
  }
  // Get_Data() {
  //   return this.http.get('../../assets/data/Skills/Skills.json');
  // }
  // get_Testimonials() {
  //   return this.http.get('../../assets/data/Skills/Testimonials.json');
  // }
}
