import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import{ FormsModule } from '@angular/forms';
import{MatButtonModule} from '@angular/material/button'
import{MatInputModule} from '@angular/material/input'

import { AppComponent } from './app.component';
import { OperasBasComponent } from './calculos/operas-bas/operas-bas.component';
import { PotenciaComponent } from './potencia/potencia.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Suma2Component } from './calculos/suma2/suma2.component';
import { CinepolisComponent } from './cine/cinepolis/cinepolis.component';

@NgModule({
  declarations: [
    AppComponent,
    OperasBasComponent,
    PotenciaComponent,
    Suma2Component,
    CinepolisComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
