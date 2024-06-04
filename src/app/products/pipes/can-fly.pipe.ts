import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly',
})
export class CanFlyPipe implements PipeTransform {
  transform(value: boolean): 'Vuela'|'No vuela' {
    const finalValue = value ? 'Vuela' : 'No vuela';

    return finalValue;
  }
}
