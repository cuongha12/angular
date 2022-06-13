import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentData } from 'src/app/data/student-data';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-form-s',
  templateUrl: './form-s.component.html',
  styleUrls: ['./form-s.component.css']
})
export class FormSComponent implements OnInit {
  student: any
  formData = new FormGroup({
    code: new FormControl('', [Validators.required, Validators.minLength(2)]),
    name: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
  })

  submited: boolean = false
  constructor(private data: StudentService, private router: Router) { }
  get f(): any {
    return this.formData.controls
  }
  ngOnInit(): void {
  }
  submit() {
    this.submited = true
    if (this.formData.invalid) {
      return;
    } else {
      this.data.addStudent(this.formData.value).subscribe((item) => {
        console.log(item);
      })
      alert('Thêm mới thành công')
      if (confirm(`Bạn có muốn trở lại trang danh sách không`)) {
        this.router.navigate([''])
      }
    }

  }


}
