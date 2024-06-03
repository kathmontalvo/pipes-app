import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameUpper:string = 'KATH';
  public nameLower:string = 'kath';
  public fullName:string = 'kAtH monTALvO';

  public customDate: Date = new Date();

}
