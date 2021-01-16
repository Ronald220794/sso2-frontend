import { Component, OnInit } from '@angular/core';
import { ParametroService } from '../parametro.service';
import { Parametro } from '../parametro';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-parametro',
  templateUrl: './actualizar-parametro.component.html',
  styleUrls: ['./actualizar-parametro.component.css']
})
export class ActualizarParametroComponent implements OnInit {

  parametro: Parametro = new Parametro();
  titulo:string ="Actualización de Parametro";

  constructor(private parametroService: ParametroService, private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargar();
  }

  cargar():void{
    this.activateRoute.params.subscribe(
      e=>{
        let id=e['id'];
        if(id){
          this.parametroService.get(id).subscribe(
             par=>this.parametro = par
          );
        }
      }
    );
  }

  update():void{
    console.log(this.parametro);
    this.parametroService.update(this.parametro).subscribe(
      res=>this.router.navigate(['/parametros'])
    )
  }
}
