import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  backGr = ['ba1.jpg', 'ba2.jpg', 'ba3.jpg'];
  len = this.backGr.length;

  current = 0;
  plus() {
    this.current = (this.current + 1) % this.len; // يتم تغيير الخلفية للصورة التالية في المصفوفة
  }

  minus() {
    this.current = (this.current - 1 + this.len) % this.len; // يتم تغيير الخلفية للصورة السابقة في المصفوفة
  }
}
