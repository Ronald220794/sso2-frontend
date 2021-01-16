import { Component, OnInit } from '@angular/core';
import { Parametro } from './parametro';
import { ParametroService } from './parametro.service';

@Component({
  selector: 'app-parametros',
  templateUrl: './parametros.component.html',
  styleUrls: ['./parametros.component.css'],
  providers: [ParametroService]
})
export class ParametrosComponent implements OnInit {
  titulo: string="lista de parametros";
  prueba: string="Prueba de mi componente";

  parametros: Parametro[];

/*   parametros: Parametro[] = [
    { 
      idParametro: 1,
      nombre_parametro: 'nombre1',
      descripcion:'descrip1',
      valor1:'value1',
      valor2:'value2',
      flg_activo:'1',
      id_sesion_ingresa:'1000',
      id_sesion_modifica:'0',
      flg_eliminado:'0'
    },
    {
      idParametro:2,
      nombre_parametro: 'nombre2',
      descripcion:'descrip2',
      valor1:'prueba2',
      valor2:'prueba2',
      flg_activo:'1',
      id_sesion_ingresa: '5000',
      id_sesion_modifica: '0',
      flg_eliminado: '0'
   }
  ]
  
  deleteItem(index:number) {
    this.parametros.splice(index,1) } */

  constructor(private parametroService: ParametroService) { }

  ngOnInit(): void {
      this.parametroService.getAll().subscribe(
          e => this.parametros = e
      );

  }

  delete(parametro:Parametro):void{
      console.log("Eliminar parametro");
      this.parametroService.delete(parametro.id).subscribe(
          res => this.parametroService.getAll().subscribe(
            response => this.parametros = response
          )
      )
  }


}
