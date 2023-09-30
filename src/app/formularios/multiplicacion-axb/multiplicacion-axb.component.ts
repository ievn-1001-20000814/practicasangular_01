import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicacion-axb',
  templateUrl: './multiplicacion-axb.component.html',
  styleUrls: ['./multiplicacion-axb.component.css']
})
export class MultiplicacionAxbComponent {
  num1:string='';
  num2:string='';
  resultado:string='';
  resultado2:number=0;
  sumar():void{

    for (let index = 1; index <= parseInt(this.num2); index++) {

      this.resultado=this.resultado+this.num1+"+";
    }


    this.resultado=this.resultado.substring (0, this.resultado.length-1)
   this.resultado2 = parseInt(this.num1)*parseInt(this.num2);
  }
}
