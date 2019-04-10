import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Course } from "../models/Course.model";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class CoursesService {
  private API_URI = "http://localhost:3000/api";

  constructor(private http: HttpClient) {}

  getCourses() {
    return this.http.get(this.API_URI + "/course");
  }
  getCourse(id: string) {
    return this.http.get(this.API_URI + "/course/" + id);
  }
  saveCourse(course: Course) {
    return this.http.post(this.API_URI + "/course/", course);
  }
  deleteCourse(id: string) {
    return this.http.delete(this.API_URI + "/course/" + id);
  }
  updateCourse(id: string, course: Course): Observable<Course> {
    return this.http.put(this.API_URI + "/course/" + id, course);
  }
}
