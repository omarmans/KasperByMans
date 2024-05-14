import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-mean-heading',
  templateUrl: './mean-heading.component.html',
  styleUrls: ['./mean-heading.component.scss'],
})
export class MeanHeadingComponent {
  @Input() header: string = '';
  @Input() pragh: string = '';
}
