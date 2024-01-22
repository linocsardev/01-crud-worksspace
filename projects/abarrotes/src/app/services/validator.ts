import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ValidatorService{

  constructor(){}
  // consultas = [
  //   {
  //     ruc: '123456789',
  //     tipoDocumento: 'Factura',
  //     numeroDocumento: '001-001',
  //     fechaEmision: '2024-01-20',
  //     serieDocumento: 'A',
  //     numeroDocumentoCompleto: '001-001-A',
  //     montoFinal: 150.75
  //   },
  //   {
  //     ruc: '987654321',
  //     tipoDocumento: 'Boleta',
  //     numeroDocumento: '002-001',
  //     fechaEmision: '2024-01-21',
  //     serieDocumento: 'B',
  //     numeroDocumentoCompleto: '002-001-B',
  //     montoFinal: 89.50
  //   },
  //   {
  //     ruc: '456789123',
  //     tipoDocumento: 'Boleta',
  //     numeroDocumento: '003-001',
  //     fechaEmision: '2024-01-22',
  //     serieDocumento: 'C',
  //     numeroDocumentoCompleto: '003-001-C',
  //     montoFinal: 45.25
  //   },
  //   {
  //     ruc: '789123456',
  //     tipoDocumento: 'Factura',
  //     numeroDocumento: '004-001',
  //     fechaEmision: '2024-01-23',
  //     serieDocumento: 'D',
  //     numeroDocumentoCompleto: '004-001-D',
  //     montoFinal: 120.00
  //   },
  //   {
  //     ruc: '321654987',
  //     tipoDocumento: 'Boleta',
  //     numeroDocumento: '005-001',
  //     fechaEmision: '2024-01-22',
  //     numeroDocumentoCompleto: '004-001-D',
  //     montoFinal: 120.00

  //   }
  // ];

  isNumber(valor: any):boolean{
    return this.isNumber(valor);
  }

}
