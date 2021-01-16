import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { Routes, RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ParametrosComponent } from './parametros/parametros.component';
import { AgregarParametroComponent } from './parametros/agregar/agregar-parametro.component';
import { ActualizarParametroComponent } from './parametros/actualizar/actualizar-parametro.component';

import { from } from 'rxjs';

const routes: Routes=[
  { path:'', redirectTo:'/parametros', pathMatch:'full'},
  { path:'parametros', component:ParametrosComponent },
  { path:'parametros/agregar', component:AgregarParametroComponent },
  { path:'parametros/actualizar/:id', component:ActualizarParametroComponent },

]


@NgModule({
  declarations: [
    AppComponent,
    ParametrosComponent,
    AgregarParametroComponent,
    ActualizarParametroComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
