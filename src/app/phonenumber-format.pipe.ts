import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phonenumberFormat'
})
export class PhonenumberFormatPipe implements PipeTransform {

  transform(rawNum) {
    rawNum = rawNum.charAt(0) != 0 ? "0" + rawNum : "" + rawNum;

    let newStr = "";
    let i = 0;

    for (; i < Math.floor(rawNum.length / 2) - 1; i++) {
      newStr = newStr + rawNum.substr(i * 2, 2) + "-";
    }

    return newStr + rawNum.substr(i * 2);
  }

}
