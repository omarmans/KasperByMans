import { Component, OnInit } from '@angular/core';
import { window } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  shown = false;
  ngOnInit(): void {}

  show_bar() {
    this.shown = !this.shown;
    console.log(this.shown);
  }
}
