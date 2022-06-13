
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentData } from 'src/app/data/student-data';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.css']
})
export class FormEditComponent implements OnInit {
  student: any
  formData = new FormGroup({
    code: new FormControl('', [Validators.required, Validators.minLength(2)]),
    name: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    id: new FormControl('', Validators.required),
  })
  id: any
  submited: boolean = false
  constructor(private data: StudentService, private router: Router, private actRoute: ActivatedRoute) { }
  get f(): any {
    return this.formData.controls
  }
  ngOnInit(): void {
    this.id = this.actRoute.snapshot.params['id']
    this.data.getItem(this.id).subscribe((item) => {
      this.formData.patchValue(item)
    })
  }
  submit() {
    this.submited = true
    if (this.formData.invalid) {
      return;
    } else {
      let dataEdit: StudentData = this.formData.value
      console.log(dataEdit.id);

      this.data.update(dataEdit).subscribe(() => {
        alert('Cập nhật thành công')

        this.router.navigate([''])
      })

    }

  }



}
