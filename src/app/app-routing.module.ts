import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaFestivosComponent } from './componentes/tabla-festivos/tabla-festivos.component';
import { VerificarFestivoComponent } from './componentes/verificar-festivo/verificar-festivo.component';

const routes: Routes = [
  {path: 'Inicio', component: TablaFestivosComponent },
  {path: 'verificarfestivo',component:VerificarFestivoComponent},
  {path: "**", pathMatch: "full", redirectTo: "inicio/verificarfestivo"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
