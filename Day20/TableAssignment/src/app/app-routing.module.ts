import { AddFormComponent } from './pages/add-form/add-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './components/students/students.component';
import { EditFormComponent } from './pages/edit-form/edit-form.component';

const routes: Routes = [

  {path: '', component: StudentsComponent},
  {path: 'add-form', component: AddFormComponent},
  {path: 'edit-form', component: EditFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
