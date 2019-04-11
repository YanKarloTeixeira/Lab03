import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../../services/courses.service';
// import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses: any = [];
  constructor(private courseService: CoursesService) {}

  ngOnInit() {
    this.getCourses();
  }
  getCourse(id: string) {
    // console.log("course to be edited :", id);
    this.courseService
      .getCourse(id)
      .subscribe(
        res => console.log('course to be edited :', id),
        err => console.log('err :', err)
      );
  }
  deleteCourse(id: string) {
    this.courseService
      .deleteCourse(id)
      .subscribe(res => console.log(res), err => console.log(err));
  }
  getCourses() {
    this.courseService.getCourses().subscribe(
      (res: Response) => {
        this.courses = res;
      },
      err => console.log(err)
    );
  }
}
