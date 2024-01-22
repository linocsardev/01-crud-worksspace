import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  static numberOnly(control: any){ //AbastractControl en vez de "any"
    const relugarExpression = /^[0-9]+$/;
    let resultado = relugarExpression.test(control.value)
    return resultado? null : {numberOnly: true}
  }
  static letterOnly(control: any){
    const regularExpresion = /^[a-zA-Z]+$/;
    let resultado = regularExpresion.test(control.value)
    return resultado? null: {letterOnly: true}
  }
}
