import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration  } from '@angular/platform-browser';
import { ReferenciasMaterialModule } from './referencias-material/referencias-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TablaFestivosComponent } from './componentes/tabla-festivos/tabla-festivos.component';
import { VerificarFestivoComponent } from './componentes/verificar-festivo/verificar-festivo.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';




@NgModule({
  declarations: [
    AppComponent,
    TablaFestivosComponent,
    VerificarFestivoComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NgxDatatableModule,
    ReferenciasMaterialModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
