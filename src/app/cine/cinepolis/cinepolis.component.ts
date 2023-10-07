import { Component } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {

  boletosForm!: FormGroup;
  compraRealizada: boolean = false;
  valorPagar: number = 0;
  nombre: string = '';
  cantidadBoletos: number = 0;
  maxboletos: number = 0;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.boletosForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      cantidadBoletos: ['', Validators.required],
      cantidadCompradores:['',Validators.required],
      tarjetaCineco: [false]
    });
  }

  comprarBoletos() {

    this.maxboletos = this.boletosForm.value.cantidadCompradores*7
    
    if(this.boletosForm.value.cantidadBoletos>this.maxboletos){
      return alert('Se ha excedido a la cantidad estimada')
    }
    if(this.boletosForm.value.cantidadBoletos<=0){
      return alert('Ingrese cantidad de boletos')
    }

    if(this.boletosForm.value.cantidadBoletos<1){
      return alert('Ingresa numero de boletos')
    }

    if (this.boletosForm.valid) {
      const nombre = this.boletosForm.value.nombre;
      const cantidadBoletos = this.boletosForm.value.cantidadBoletos;
      const tarjetaCineco = this.boletosForm.value.tarjetaCineco;

      // Lógica de cálculo de descuentos y valor a pagar
      let descuento = 0;
      if (cantidadBoletos >= 5) {
        descuento = 0.15;
      } else if (cantidadBoletos >= 3) {
        descuento = 0.11;
      }

      let valorBase = cantidadBoletos * 12;
      let descuentoTotal = valorBase * descuento;
      let valorPagar = valorBase - descuentoTotal;

      if (tarjetaCineco=="Si") {
        valorPagar -= valorBase * 0.085;
      }

      this.valorPagar = valorPagar;
      this.nombre = nombre;
      this.cantidadBoletos = cantidadBoletos;
      this.compraRealizada = true;
    }
  }
}