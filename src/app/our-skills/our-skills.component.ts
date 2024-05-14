interface Skill_INTR {
  skill?: string;
  dataProgress: string;
}
interface Testimonial {
  img: string;
  p: string;
  name: string;
}
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { SkillsService } from './skills.service';

@Component({
  selector: 'app-our-skills',
  templateUrl: './our-skills.component.html',
  styleUrls: ['./our-skills.component.scss'],
})
export class OurSkillsComponent implements OnInit, AfterViewInit {
  @ViewChild('skill_sec') skill_sec!: ElementRef;

  Skills: Skill_INTR[] = [];
  grow_smozzy = false;

  constructor(private get_data: SkillsService) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.From_ZERO_TO_TOP();
    }, 0);
  }

  ngOnInit(): void {
    this.Get_data_from_SRV();
    this.get_Testimonials_from_SRV();
    this.Slice(2, 4);
  }

  //get data from Services.ts
  Get_data_from_SRV() {
    this.get_data.Get_Data().subscribe((skill: any) => {
      this.Skills = skill;
    });
  }
  Testimonials: Testimonial[] = [];
  Filterd_Testimonials: Testimonial[] = [];
  active_IND = 1;
  get_Testimonials_from_SRV() {
    if (this.Testimonials.length === 0) {
      this.get_data.get_Testimonials().subscribe((Testimonial: any) => {
        this.Testimonials = Testimonial;
        this.Filterd_Testimonials = this.Testimonials.slice(2, 4);
      });
    }
  }
  Slice(num1: number, num2: number) {
    this.Filterd_Testimonials = this.Testimonials.slice(num1, num2);
  }
  //animate on scroll
  From_ZERO_TO_TOP() {
    const skillSecOffsetTop = this.skill_sec.nativeElement.offsetTop;
    // console.log(skillSecOffsetTop);
    window.addEventListener('scroll', () => {
      if (window.scrollY >= skillSecOffsetTop + 400) {
        // console.log(`reached`);
        this.grow_smozzy = true;
      }
    });
  }
}
//note==> we have to reach static element to be reached it ,in this case we reached a parent container

// //checkPos
// get_pos() {
//   console.log(this.skill_sec.nativeElement.offsetTop);
// }
