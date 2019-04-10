import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";

import { CourseListComponent } from "./components/course/course-list/course-list.component";
import { CourseFormComponent } from "./components/course/course-form/course-form.component";
import { StudentListComponent } from "./components/student/student-list/student-list.component";
import { StudentFormComponent } from "./components/student/student-form/student-form.component";

const routes: Routes = [
  {
    path: "",
    component: AppComponent,
    data: { title: "Angular 5 HttpClient" }
  },
  {
    path: "courses",
    component: CourseListComponent
  },
  {
    path: "course/edit/:id",
    component: CourseFormComponent
  },
  {
    path: "course/create",
    component: CourseFormComponent
  },
  {
    path: "students",
    component: StudentListComponent
  },
  {
    path: "student/edit/:id",
    component: StudentFormComponent
  },
  {
    path: "student/create",
    component: StudentFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
