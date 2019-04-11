import { Component, OnInit } from '@angular/core';

import {CoursesService} from '../../../services/courses.service';
import {EnrollmentService} from '../../../services/enrollments.service';
import { Enrollment } from 'src/app/models/Enrollment.model';

@Component({
  selector: 'app-enrollment-list',
  templateUrl: './enrollment-list.component.html',
  styleUrls: ['./enrollment-list.component.css']
})
export class EnrollmentListComponent implements OnInit {

  enrollments: any = [];

  constructor(private enrollmentService: EnrollmentService) { }


  ngOnInit() {
    console.log('Enrolment component active');
    this.enrollmentService.getEnrollmentByStudent().subscribe(
      res => {
        console.log(res);
        this.enrollments = res;
      },
      err => { console.log(err);
      }
    );
    
  }

}
