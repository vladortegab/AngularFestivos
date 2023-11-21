import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/environment';
import { FestivoDto } from '../entidades/festivo-dto';

@Injectable({
  providedIn: 'root'
})
export class FestivoService {
 

  url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.urlBase}festivos`;
  }

  public verificarFestivo(fecha: Date) : Observable<string> {
    let año = fecha.getFullYear();
    let mes = fecha.getMonth() + 1;
    let dia = fecha.getUTCDate();
    let urlT = `${this.url}/verificar?fecha=${año}-${mes}-${dia}`;

    return this.http.get(urlT, { responseType: 'text' });
  }

  public obtenerFestivos(anio: number): Observable<FestivoDto[]> {
    let urlT = `${this.url}/obtener?anio=${anio}`;
    
      
    return this.http.get<FestivoDto[]>(urlT);
    
  }
  

}