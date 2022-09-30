import { FormsModule } from '@angular/forms';
import { DebugService } from './services/debug.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpenseEntryComponent } from './expense-entry/expense-entry.component';
import { TestComponent } from './test/test.component';
import { TableComponent } from './table/table.component';
import { DirectiveTestComponent } from './directives/directive-test/directive-test.component';
import { CustomstyleDirective } from './customstyle.directive';
import { ChildComponent } from './components/child/child.component';
import { ExpenseEntryListComponent } from './components/expense-entry-list/expense-entry-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseEntryComponent,
    TestComponent,
    TableComponent,
    DirectiveTestComponent,
    CustomstyleDirective,
    ChildComponent,
    ExpenseEntryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    DebugService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
