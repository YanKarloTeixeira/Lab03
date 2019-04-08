import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseListComponent } from './components/course/course-list/course-list.component';
import { CourseItemComponent } from "./components/course/course-item/course-item.component";
import { AppComponent} from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    data: { title: 'Angular 5 HttpClient' }
  },
  {
    path: 'courses',
    component: CourseListComponent,
  },
  {
    path: 'courseEdit',
    component: CourseItemComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
