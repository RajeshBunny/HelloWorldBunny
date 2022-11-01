import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'footer'
})
export class FooterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
