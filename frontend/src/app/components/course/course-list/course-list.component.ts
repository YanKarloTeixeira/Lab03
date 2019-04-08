import { Component, OnInit } from "@angular/core";
import { CoursesService } from "../../../services/courses.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-course-list",
  templateUrl: "./course-list.component.html",
  styleUrls: ["./course-list.component.css"]
})
export class CourseListComponent implements OnInit {
  courses: any = [];
  constructor(private courseService: CoursesService) {}

  ngOnInit() {
    this.courseService.getCourses().subscribe(
      (res: Response) => {
        this.courses = res;
        console.log("data :", this.courses);
      },
      err => console.log(err)
    );
  }
  goToEdit(course){
    console.log('recebe course=> ', course._id);
  }
}
