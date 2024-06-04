import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'toggleCase'
})
export class ToggleCasePipe implements PipeTransform {

  transform(value:string, toUpper = false ):string {
    const finalValue = toUpper ? value.toUpperCase() : value.toLowerCase();
    return finalValue;
  }
}
