import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Parametro } from './parametro';


const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Authorization': 'Basic U3NvQXBwOmIzYjc0NDM0MWE4NzA5MWFkNTRmZjU4ZDY4OTg5OGFk' }
  )}; 


@Injectable({
  providedIn: 'root'
})
export class ParametroService {

  private url:string="https://5f6e1f6860cf97001641bc02.mockapi.io/api/parametro";

  constructor(private http:HttpClient) { }


  getAll():Observable<Parametro[]>{
    return this.http.get<Parametro[]>(this.url);
  }

  create(parametro:Parametro):Observable<Parametro>{
    return this.http.post<Parametro>(this.url, parametro);
  }

  get(id:number):Observable<Parametro>{
    return this.http.get<Parametro>(this.url+ '/' +id);
  }

  update(parametro:Parametro):Observable<Parametro>{
    return this.http.put<Parametro>(this.url + '/' + parametro.id, parametro);
  }

  delete(id:number):Observable<Parametro>{
    return this.http.delete<Parametro>(this.url +'/'+ id);
  }

}
