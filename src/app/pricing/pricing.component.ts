import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
})
export class PricingComponent {
  header_Obj = {
    header: 'pricing',
    p: 'Lorem, ipsum dolor sit amet consecteturadipisicingelit. Magnam id obcaecati numquamminima porro perferendis ratione eligendi sedfuga necessitatibus!',
  };

  Feature_Pricing = [
    { name: 'basic', price: 19, coin: '$', duration: '/Mo' },
    { name: 'premuim', price: 29, coin: '$', duration: '/Mo' },
    { name: 'pro', price: 39, coin: '$', duration: '/Mo' },
    { name: 'platinum', price: 49, coin: '$', duration: '/Mo' },
  ];
}
