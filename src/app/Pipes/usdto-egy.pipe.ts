import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'USDtoEGY',
})
export class USDtoEGYPipe implements PipeTransform {
  transform(value: number, rate: number): number {
    return value * rate;
  }
}
