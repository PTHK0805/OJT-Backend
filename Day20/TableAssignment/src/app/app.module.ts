import { AppAngularMaterialModule } from './app-angular-material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentsComponent } from './components/students/students.component';
import { AddFormComponent } from './pages/add-form/add-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteDialogComponent } from './dialogs/delete-dialog/delete-dialog.component';
import { EditFormComponent } from './pages/edit-form/edit-form.component'

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    AddFormComponent,
    DeleteDialogComponent,
    EditFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppAngularMaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
