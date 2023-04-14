import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BicicletaFormularioComponent } from './bicicleta-formulario/bicicleta-formulario.component';
import { TypeScriptComponent } from './type-script/type-script.component';

@NgModule({
  declarations: [
    AppComponent,
    BicicletaFormularioComponent,
    TypeScriptComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
