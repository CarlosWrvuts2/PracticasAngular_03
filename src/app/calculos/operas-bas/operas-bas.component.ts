import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent {
  num1: string = '';
  num2: string = '';
  resultado: number = 0;
  operacion: string = 'suma'; 

  calcular(): void {
    const numero1 = parseInt(this.num1);
    const numero2 = parseInt(this.num2);

    switch (this.operacion) {
      case 'suma':
        this.resultado = numero1 + numero2;
        break;
      case 'resta':
        this.resultado = numero1 - numero2;
        break;
      case 'multiplicacion':
        this.resultado = numero1 * numero2;
        break;
      case 'division':
        if (numero2 !== 0) 
          this.resultado = numero1 / numero2;
        break;
 
    }
  }
}