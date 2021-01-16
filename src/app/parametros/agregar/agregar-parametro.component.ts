import { Component, OnInit } from '@angular/core';
import { ParametroService } from '../parametro.service';
import { Parametro } from '../parametro';
import { Router } from '@angular/router';
/* import { FormBuilder, Validators} from '@angular/forms'; */

@Component({
  selector: 'app-agregar-parametro',
  templateUrl: './agregar-parametro.component.html',
  styleUrls: ['./agregar-parametro.component.css']
})
export class AgregarParametroComponent implements OnInit {

  parametro: Parametro = new Parametro();
  titulo:string ="Registro de Parametro";



  constructor(private parametroservice:ParametroService, private router: Router){ }

  ngOnInit(): void {
    
  }

  create():void{
    console.log(this.parametro);
    this.parametroservice.create(this.parametro).subscribe(
        res=>this.router.navigate(['/parametros'])
    )
    
    // res =>this.router.navigate(['/parametros'])

  }
}
