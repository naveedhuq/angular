import { SignupFormComponent } from './signup-form/signup-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    FormBuilderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
