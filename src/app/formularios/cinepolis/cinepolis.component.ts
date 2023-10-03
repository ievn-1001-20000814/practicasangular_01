import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {
  nombre:string='';
  comp:number=0;
  num:number=0;
  resultado:number=0;
  opcion:number=0;
  mensaje:string='';
  procesar():void{

    if(this.num>(7*this.comp)){
      this.mensaje = this.nombre + " no puedes comprar mas de 7 boletos por comprador" ;
      this.resultado=0;
    }
    else{
      this.mensaje = "" ;
      this.resultado=0;
      if(this.opcion==1){
        //si pago con tarjeta 10 de descuento al final
        if (this.num== 1 || this.num==2)
        this.resultado= this.num * 12000;
        if (this.num== 3 || this.num==4 || this.num==5){
          this.resultado= this.num * 12000;
          this.resultado= this.resultado*0.9;
        }
        if (this.num>=6){
          this.resultado= this.num * 12000;
          this.resultado= this.resultado*0.85;
        }
        this.resultado = this.resultado * 0.9;
      }
      if(this.opcion==2){
        //no pago con tarjeta  sin de descuento al final
        if (this.num== 1 || this.num==2)
        this.resultado= this.num * 12000;
        if (this.num== 3 || this.num==4 || this.num==5){
          this.resultado= this.num * 12000;
          this.resultado= this.resultado*0.9;
        }
        if (this.num>=6){
          this.resultado= this.num * 12000;
          this.resultado= this.resultado*0.85;
        }
      }
    }

}



}
