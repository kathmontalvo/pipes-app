import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //i18nSelect
  public name: string = 'kath';
  public gender: 'male'|'female'|'nb' = 'female';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
    nb: 'invitarle'
  }

  changeGender(gender: string):void {
    switch (gender) {
      case 'female':
        this.name = 'kath';
        this.gender = 'female';
        break;
      case 'male':
        this.name = 'abhay';
        this.gender = 'male';
        break;
      case 'nb':
        this.name = 'burako';
        this.gender = 'nb';
        break;

      default:
        break;
    }
  }

  //i18nPlural
  public clients: string[] = ['kath', 'abhay', 'bu', 'fio', 'rodrigo', 'thais', 'dani'];
  public clientsMap= {
    '=0': 'no tenemos ningún cliente',
    '=1': 'tenemos 1 cliente',
    'other': 'tenemos # clientes'
  }
  deleteClient():void {
    this.clients.pop();
  }

  //KeyValue Pipe

  public person = {
    name: 'kath',
    age: 26,
    address: 'chorrillos'
  }

  // async pipe

  public myObservableTimer= interval(2000).pipe(
    tap( value => console.log('tap:', value)),
  )

  public promiseValue: Promise<string> = new Promise( (resolve, rej) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.');
      console.log('Tenemos data en la promesa.')
    }, 3500)
  })
}
