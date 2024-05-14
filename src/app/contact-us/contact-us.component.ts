import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class CONTACTUSComponent {
  header = {
    name: 'Contact-Us',
    p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, vel itaque? Explicabo atque eveniet ipsum!',
  };

  data = {
    name: '',
    email: '',
    msg: '',
  };

  onSub(f: NgForm) {
    console.log(f);
    this.data = f.value;
    console.log(f.valid);
    console.log('the return data is   ' + this.data.email);
    f.reset();
  }
}
