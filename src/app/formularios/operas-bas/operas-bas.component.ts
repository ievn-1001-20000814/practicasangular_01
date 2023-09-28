import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent {

  num:string='';
  resultado:number=0;
  opcion:number=0;
  operacion():void{

    if(this.opcion==1)
    this.resultado = (parseFloat(this.num)*1.8)+32;
    if(this.opcion==2)
    this.resultado =( parseFloat(this.num)-32)/1.8;

}

}