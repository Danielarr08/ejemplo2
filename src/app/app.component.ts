import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DadoComponent } from "./dado/dado.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejemplo2';

  //propiedades
  resultado: string = '';
  valorDado1: number = this.generarAleatorio();
  valorDado2: number = this.generarAleatorio();
  valorDado3: number = this.generarAleatorio();

  // funcion que genera un numero aleatorio entre 1 y 6
  generarAleatorio() {
    return Math.floor(Math.random() * 6) + 1;
  }

  // funcion que hace la tirada y verifica el resultado
  tirarDados() {
    this.valorDado1 = this.generarAleatorio();
    this.valorDado2 = this.generarAleatorio();
    this.valorDado3 = this.generarAleatorio();

    // comparamos si los 3 son iguales
    if (this.valorDado1 == this.valorDado2 &&
      this.valorDado1 == this.valorDado3){
      this.resultado = 'Felicidades, GANASTE!!!!';
    } else {
      this.resultado = 'Lastima, perdiste :( Sigue Participando'
    }

  }
}