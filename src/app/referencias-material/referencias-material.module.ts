import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';




@NgModule({
    exports: [
      MatDatepickerModule,
      MatFormFieldModule,
      MatNativeDateModule,
      MatInputModule
    
      
    ],
  })
  export class ReferenciasMaterialModule {}
  