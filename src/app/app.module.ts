import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { PremiseComponent } from './premise/premise.component';
import { HeaderComponent } from './header/header.component';
import {CalculationService} from './calculation.service';

@NgModule({
  declarations: [
    AppComponent,
    PremiseComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [CalculationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
