import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


import { Student } from '../models/Student.model';


@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getStudents() {
    return this.http.get(this.API_URI + '/student');
  }
  getStudent(id: string) {
    return this.http.get(this.API_URI + '/student/' + id);
  }
  saveStudent(student: Student) {
    return this.http.post(this.API_URI + '/student/', student);
  }
  deleteStudent(id: string) {
    return this.http.delete(this.API_URI + '/student/' + id);
  }
  updateStudent(id: string, student: Student): Observable<any> {
    return this.http.put(this.API_URI + '/student/' + id, student);
  }
}
