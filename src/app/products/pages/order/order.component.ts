import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {

  public isUpperCase: boolean = false;
  public orderBy: keyof Hero | '' = '';
  public ascending: boolean = true;

  public heroes: Hero[] = [
    {
      name: 'superman',
      canFly: true,
      color: Color.blue,
    },
    {
      name: 'daredevil',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'batman',
      canFly: false,
      color: Color.black,
    },
    {
      name: 'superwoman',
      canFly: true,
      color: Color.pink,
    },

  ]

  toggleUpperCase():void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value: keyof Hero) {
    this.orderBy = value;
    if (value === this.orderBy) {
      this.ascending = !this.ascending;
    } else {
      this.ascending = true;
    }
  }
}
