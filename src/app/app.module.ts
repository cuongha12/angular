import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { HeaderComponent } from './layout/header/header.component';
import { CategoryComponent } from './layout/category/category.component';
import { ListSComponent } from './content/list-s/list-s.component';
import { FormSComponent } from './content/form-s/form-s.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormEditComponent } from './form-edit/form-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    HeaderComponent,
    CategoryComponent,
    ListSComponent,
    FormSComponent,
    FormEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
