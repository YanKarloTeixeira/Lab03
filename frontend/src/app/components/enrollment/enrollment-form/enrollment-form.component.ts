import { Component, OnInit } from '@angular/core';

import { Course } from '../../../models/Course.model';
import {CoursesService} from '../../../services/courses.service';


@Component({
  selector: 'app-enrollment-form',
  templateUrl: './enrollment-form.component.html',
  styleUrls: ['./enrollment-form.component.css']
})
export class EnrollmentFormComponent implements OnInit {
courses: any = [];

  constructor(private courseService: CoursesService) { }

  ngOnInit() {
    this.courseService.getCourses().subscribe(
      (res: Response) => {
        this.courses = res;
      },
      err => console.log(err)
    );
  }

}
