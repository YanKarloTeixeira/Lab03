import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CourseComponent } from './components/course/course.component';
import { CourseFormComponent } from './components/course/course-form/course-form.component';
import { CourseDetailComponent } from './components/course/course-detail/course-detail.component';
import { CourseListComponent } from './components/course/course-list/course-list.component';
import { CourseItemComponent } from './components/course/course-item/course-item.component';

import{CoursesService} from './services/courses.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CourseComponent,
    CourseFormComponent,
    CourseDetailComponent,
    CourseListComponent,
    CourseItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
