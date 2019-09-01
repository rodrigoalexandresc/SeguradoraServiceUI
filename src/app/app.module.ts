import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CoberturaService } from './services/cobertura.service';
import { PriceService } from './services/price.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [  
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    CoberturaService,
    PriceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
