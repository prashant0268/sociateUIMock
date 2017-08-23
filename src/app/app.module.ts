import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule, MdTabsModule, MdListModule, MdCardModule,
        MdChipsModule, MdMenuModule, MdInputModule, MdSelectModule, MdSlideToggleModule} from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MdButtonModule, MdCheckboxModule, MdTabsModule, MdCardModule,
    MdChipsModule, MdMenuModule, MdInputModule, MdSelectModule, MdListModule, MdSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
