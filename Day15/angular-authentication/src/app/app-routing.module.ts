import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseEntryListComponent } from './components/expense-entry-list/expense-entry-list.component';
import { ExpenseEntryComponent } from './components/expense-entry/expense-entry.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ExpenseGuard } from './expense.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent },
  { path: 'admin', component: ExpenseEntryListComponent, canActivate: [ExpenseGuard]},
  { path: 'expenses/detail', component: ExpenseEntryComponent, canActivate: [ExpenseGuard]},
  { path: '', redirectTo: 'expenses', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
