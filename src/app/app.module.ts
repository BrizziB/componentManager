import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ComponentA } from './component.A';
import { ComponentB } from './component.B';
import { ComponentManagerService } from './Service/component.manager.service';


@NgModule({
  declarations: [
    AppComponent,
    ComponentA,
    ComponentB
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ComponentManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
