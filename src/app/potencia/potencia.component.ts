import { Component } from '@angular/core';

@Component({
  selector: 'app-potencia',
  templateUrl: './potencia.component.html',
  styleUrls: ['./potencia.component.css']
})
export class PotenciaComponent {
  num1: string = '';
  num2: string = '';
  resultado: number = 0;
  resultadoMensaje: string = '';

  calcularMultiplicacion(): void {
    const num1Numero = parseFloat(this.num1);
    const num2Numero = parseFloat(this.num2);

    if (!isNaN(num1Numero) && !isNaN(num2Numero)) {
      this.resultado = num1Numero * num2Numero;
      const proceso = this.generarProceso(num1Numero, num2Numero);
      this.resultadoMensaje = `${proceso.join(' + ')} =  ${this.resultado}`;
    } else {
      alert('Por favor, ingrese números válidos para los números 1 y 2.');
      this.resultadoMensaje = '';
    }
  }

  generarProceso(num1: number, num2: number): number[] {
    const proceso: number[] = [];

    let i = 1;
    do {
      proceso.push(num1);
      i++;
    } while (i <= num2);

    return proceso;
  }
}
