// tabla-festivos.component.ts
import { Component } from '@angular/core';
import { FestivoDto } from 'src/app/entidades/festivo-dto';
import { FestivoService } from 'src/app/servicios/festivo.service';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-tabla-festivos',
  templateUrl: './tabla-festivos.component.html',
  styleUrls: ['./tabla-festivos.component.css']
})
export class TablaFestivosComponent  {

  public anio: number | undefined;

  public festivos: FestivoDto[] = [];

  public columnas = [
    {name: "Festivo", prop: "nombre"},
    {name: "Fecha", prop: "fecha"}
  ];
  
  

  public modoColumna = ColumnMode;
  public tipoSeleccion = SelectionType;

  ngOnInit(): void {
   
  }

  constructor(private festivoService: FestivoService) {}

  public obtenerFestivos() {

    if(this.anio){
      this.festivoService.obtenerFestivos(this.anio).subscribe(
        respuesta => {
          this.festivos = respuesta;
        }
      );
    }else{
      window.alert("Debe ingresar un año");
    }
  }
}
