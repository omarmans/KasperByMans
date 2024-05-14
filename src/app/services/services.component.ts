interface Serv_Box {
  i: string;
  h3: string;
  p: string;
}

import { Component, OnInit } from '@angular/core';
import { ServDataService } from './serv-data.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  constructor(private data: ServDataService) {}
  ngOnInit(): void {
    this.get_data_from_Serv();
  }
  temp = {
    h2: 'Services',
    pragh:
      ' Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.Maurisblandit aliquet elit, eget tincidun ',
  };

  serv_boxeS: Serv_Box[] = [];

  get_data_from_Serv() {
    this.data.Get_data().subscribe((data) => {
      // console.log('data' + data);
      this.serv_boxeS = data;
    });
  }
}
