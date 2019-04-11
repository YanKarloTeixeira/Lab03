import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


import { Enrollment } from '../models/Enrollment.model';


@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  private API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getEnrollments() {
    return this.http.get(this.API_URI + '/enrollment');
  }
  getEnrollmentByStudent() {
    return this.http.get(this.API_URI + '/enrollment/by_student');
  }
  getEnrollmentByCourse(courseId: string) {
    return this.http.get(this.API_URI + '/enrollment/by_course/' + courseId);
  }
  getEnrollment(id: string) {
    return this.http.get(this.API_URI + '/enrollment/' + id);
  }
  saveEnrollment(enrollment: Enrollment) {
    return this.http.post(this.API_URI + '/enrollment/', enrollment);
  }
  deleteEnrollment(id: string) {
    return this.http.delete(this.API_URI + '/enrollment/' + id);
  }
  updateEnrollment(id: string, enrollment: Enrollment): Observable<any> {
    return this.http.put(this.API_URI + '/enrollment/' + id, enrollment);
  }
}
