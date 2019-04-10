import { Component, OnInit, HostBinding } from "@angular/core";
import { Student } from "src/app/models/Student.model";
import { Router, ActivatedRoute } from "@angular/router";

import { StudentsService } from "../../../services/students.service";

@Component({
  selector: "app-student-form",
  templateUrl: "./student-form.component.html",
  styleUrls: ["./student-form.component.css"]
})
export class StudentFormComponent implements OnInit {
  @HostBinding("class") classes = "row";
  edit: boolean = false;

  student : Student = {
    _id: null,
    fisrtName: null,
    lastName: null,
    StudentNumber: null,
    email: null,
    password: null,
    address: null,
    city: null,
    program: null,
    phone: null,
    salt: null,
    provider: null,
    providerId: null,
    providerData: null,
    created: null
  }

  constructor(
    private studentsService: StudentsService,
    private router: Router,
    private activedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    if (params.id) {
      this.studentsService.getStudent(params.id).subscribe(
        res => {
          this.student = res;
          this.edit = true;
        },
        err => {
          console.log(err);
        }
      );
    }
  }

  actionStudent() {
    if (this.edit) {
      this.studentsService.updateStudent(this.student._id, this.student).subscribe(
        res => {
          console.log(res);
          this.router.navigate(["/"]);
        },
        err => {
          console.log(err);
        }
      );

    } else {
      delete this.student._id;

      this.studentsService.saveStudent(this.student).subscribe(
        res => {
          console.log(res);
          this.router.navigate(["/"]);
        },
        err => {
          console.log(err);
        }
      );

    }
  }
}
