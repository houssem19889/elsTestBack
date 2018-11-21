import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SalarieService } from './salarie/salarie.service';
import { AppComponent } from './app.component';
import { SalarieComponent } from './salarie/salarie.component';
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
@NgModule({
  declarations: [
    AppComponent,
    SalarieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SalarieService],
  bootstrap: [AppComponent,SalarieComponent]
})
export class AppModule { }
