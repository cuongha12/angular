import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StudentData } from '../data/student-data';
const urlAPi = 'https://62a04fa9202ceef7086a607e.mockapi.io/student'
@Injectable({
  providedIn: 'root'
})

export class StudentService {

  constructor(private http: HttpClient) {
  }
  getAll() {
    return this.http.get<StudentData[]>(`${urlAPi}`)
  }
  getItem(id: number) {
    return this.http.get<StudentData>(`${urlAPi}/${id}`)
  }
  addStudent(student: StudentData) {
    return this.http.post<StudentData>(`${urlAPi}`, student)
  }
  delete(i: number) {
    return this.http.delete(`${urlAPi}/${i}`)
  }
  update(student: StudentData) {
    return this.http.put<StudentData>(`${urlAPi}/${student.id}`, student)
  }

}
