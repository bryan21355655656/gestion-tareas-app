import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // IMPORTANTE
import { FormsModule } from '@angular/forms'; // IMPORTANTE

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // <--- Si falta esto, falla la API
    FormsModule       // <--- Si falta esto, falla el ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
