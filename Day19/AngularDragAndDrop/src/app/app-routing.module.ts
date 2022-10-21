import { HomeComponent } from './pages/home/home.component';
import { DragAndDropComponent } from './pages/drag-and-drop/drag-and-drop.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'drag-and-drop', component: DragAndDropComponent},
  //{ path: '',   redirectTo: '/drag-and-drop', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
