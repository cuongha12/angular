import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormSComponent } from './content/form-s/form-s.component';
import { ListSComponent } from './content/list-s/list-s.component';
import { FormEditComponent } from './form-edit/form-edit.component';

const routes: Routes = [
  { path: '', component: ListSComponent },
  { path: 'form', component: FormSComponent },
  { path: 'form/:id', component: FormEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
