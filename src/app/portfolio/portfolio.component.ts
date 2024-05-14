interface img_interFace {
  PH_name: string;
  h4: string;
  p: string;
  type: string;
}

import { Component, OnInit } from '@angular/core';
import { ImgService } from './img.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  constructor(private get_img: ImgService) {}
  ngOnInit(): void {
    this.Imges();
  }

  Portfolio = {
    h3: 'Portfolio',
    p: 'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, egettincidunnibh pulvinar a. Curabitur aliquet quam ',
  };

  imgs: img_interFace[] = [];

  Imges() {
    this.get_img.Get_img().subscribe((data: any) => {
      // console.log(data);
      this.imgs = data;
      this.filterd_img = this.imgs;
    });
  }

  filterd_img = this.imgs;
  activeType = 'all';

  filter(type: string) {
    this.activeType = type;

    if (type === 'all') {
      this.filterd_img = this.imgs;
    } else {
      this.filterd_img = this.imgs.filter((img) => {
        //imgs is array -___-
        return img.type.includes(type);
      });
    }
  }
}
