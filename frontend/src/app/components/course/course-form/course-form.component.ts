import { Component, OnInit, HostBinding } from '@angular/core';
import { Course } from 'src/app/models/Course.model';
import { Router, ActivatedRoute } from '@angular/router';

import { CoursesService } from '../../../services/courses.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  edit: boolean = false;

  course: Course = {
    _id: null,
    courseCode: null,
    courseName: null,
    semester: null,
    section: null
  };

  constructor(
    private coursesService: CoursesService,
    private router: Router,
    private activedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    console.log('params :', params);
    if (params.id) {
      console.log('params.id', params.id);
      this.coursesService.getCourse(params.id).subscribe(
        res => {
          console.log(res);
          this.course = res;
          this.edit = true;
        },
        err => {
          console.log(err);
        }
      );
    }
  }

  actionCourse() {
    if (this.edit) {
      this.coursesService.updateCourse(this.course._id, this.course).subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/']);
        },
        err => {
          console.log(err);
        }
      );

    } else {
      delete this.course._id;
     

      this.coursesService.saveCourse(this.course).subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/']);
        },
        err => {
          console.log(err);
        }
      );

    }
  }
}
