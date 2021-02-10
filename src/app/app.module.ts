import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AComponentSlectersComponent } from './a-component-slecters/a-component-slecters.component';
import { CustomAttuributeSlecterComponent } from './a-component-slecters/custom-atturibute-slecter/custom-atturibute-slecter.component';
import { ClassSelecterComponent } from './a-component-slecters/class-selecter/class-selecter.component';
import { BDataBintingComponent } from './b-data-binting/b-data-binting.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    AComponentSlectersComponent,
    CustomAttuributeSlecterComponent,
    ClassSelecterComponent,
    BDataBintingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
