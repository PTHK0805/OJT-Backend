import { DebugService } from './services/debug.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpenseEntryComponent } from './expense-entry/expense-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    DebugService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
