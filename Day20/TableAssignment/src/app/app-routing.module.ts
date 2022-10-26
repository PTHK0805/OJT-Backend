import { AddFormComponent } from './pages/add-form/add-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './components/students/students.component';

const routes: Routes = [

  {path: '', component: StudentsComponent},
  {path: 'add-form', component: AddFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
