import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe',
})
export class CustomPipePipe implements PipeTransform {
  static transform(arg0: number): any {
    throw new Error('Method not implemented.');
  }
  transform(value: any, ...args: any[]): any {
    if (null !== value && !isNaN(value)) {
      return value + 3;
    } else {
      return 'Not a number';
    }
  }
}
