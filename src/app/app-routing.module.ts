import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeEditComponent } from './component/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'emp-list', component: EmployeeListComponent },
  { path: 'emp-add', component: EmployeeEditComponent },
  { path: 'emp-edit/:id', component: EmployeeEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
