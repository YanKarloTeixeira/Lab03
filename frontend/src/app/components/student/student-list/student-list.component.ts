import { Component, OnInit } from "@angular/core";
import { StudentsService } from "../../../services/students.service";
// import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-stuent-list",
  templateUrl: "./student-list.component.html",
  styleUrls: ["./student-list.component.css"]
})
export class StudentListComponent implements OnInit {
  students: any = [];
  constructor(private studentService: StudentsService) { }

  ngOnInit() {
    this.getStudents();
  }
  getStudents() {
    this.studentService.getStudents().subscribe(
      (res: Response) => {
        this.students = res;
      },
      err => console.log(err)
    );
  }
}
