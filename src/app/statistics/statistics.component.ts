interface Statistics {
  i: string;
  number: number;
  p: string;
}
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { StaticService } from './static.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit, AfterViewInit {
  @ViewChild('number') number!: ElementRef;
  Statistics: Statistics[] = [];
  grow = false;
  constructor(private Stat: StaticService) {}
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.SCR();
    }, 0);
  }
  ngOnInit(): void {
    this.Get_data();
  }

  //get_data-From_services
  Get_data() {
    this.Stat.Stat_from_Server().subscribe((data: any) => {
      this.Statistics = data;
    });
  }

  SCR() {
    const setTop = this.number.nativeElement.offsetTop;
    console.log(setTop);
    window.addEventListener('scroll', () => {
      if (window.scrollY >= setTop + 400) {
        console.log(`reached`);
        let num_box = document.querySelectorAll('.number');
        num_box.forEach((goal: any) => {
          goal.textContent = 0;
          let Data_attr = goal.getAttribute('data-goal');

          console.log(`data goal is  ` + Data_attr);

          let Interval = setInterval(() => {
            if (Data_attr == goal.textContent) {
              clearInterval(Interval);
            } else {
              goal.textContent++;
            }
          }, 2000 / Data_attr);
        });
      }
    });
  }
}
//note==> we have to reach static element to be reached it ,in this case we reached a parent container
