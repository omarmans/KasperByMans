import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scr-btn',
  templateUrl: './scr-btn.component.html',
  styleUrls: ['./scr-btn.component.scss'],
})
export class SCRBtnComponent implements OnInit {
  ngOnInit(): void {
    window.onscroll = () => this.Scr();
  }
  show_btn = true;
  title = 'Kasper';

  Scr() {
    if (window.scrollY >= 1000) {
      this.show_btn = false;
    } else {
      this.show_btn = true;
    }
  }
  Up() {
    window.scrollTo({
      top: -100,
      left: -100,
      behavior: 'smooth',
    });
  }
  Down() {
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: 'smooth',
    });
  }
}
