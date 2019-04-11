import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { CourseFormComponent } from './components/course/course-form/course-form.component';
import { CourseListComponent } from './components/course/course-list/course-list.component';
import { StudentListComponent } from './components/student/student-list/student-list.component';

import {CoursesService} from './services/courses.service';
import { StudentFormComponent } from './components/student/student-form/student-form.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { HomeComponent } from './home/home.component';
import { EnrollmentFormComponent } from './components/enrollment/enrollment-form/enrollment-form.component';
import { EnrollmentListComponent } from './components/enrollment/enrollment-list/enrollment-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CourseFormComponent,
    CourseListComponent,
    StudentListComponent,
    StudentFormComponent,
    AuthenticationComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    EnrollmentFormComponent,
    EnrollmentListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
