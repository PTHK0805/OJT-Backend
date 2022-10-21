import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDividerModule } from '@angular/material/divider'

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],

  exports: [
    DragDropModule,
    MatDividerModule
  ]
})
export class AppAngularMaterialModule { }
