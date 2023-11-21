import { Component, OnInit } from '@angular/core';
import { FestivoService } from 'src/app/servicios/festivo.service';

@Component({
  selector: 'app-verificar-festivo',
  templateUrl: './verificar-festivo.component.html',
  styleUrls: ['./verificar-festivo.component.css'],
})
export class VerificarFestivoComponent implements OnInit {
  public fechaElegida:Date | undefined;

  ngOnInit(): void {
    this.verificarFestivo();
  }

  constructor(private festivoService: FestivoService) {}

  public verificarFestivo() {
    // Convertir la fecha de string a Date si es necesario
    if (this.fechaElegida){
      this.festivoService.verificarFestivo(this.fechaElegida).subscribe(respuesta=>{window.alert(respuesta);});
    }
    else {window.alert("debe selecionar una fecha");
  }
  }
}
