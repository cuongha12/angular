import { Component, OnInit } from '@angular/core';
import { StudentData } from 'src/app/data/student-data';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-list-s',
  templateUrl: './list-s.component.html',
  styleUrls: ['./list-s.component.css']
})
export class ListSComponent implements OnInit {
  list: any
  constructor(private data: StudentService,) {
    // this.list = Sdata
    data.getAll().subscribe((item) => {
      this.list = item
    })
    console.log(this.list);

  }

  ngOnInit(): void {
  }
  deleteStudent(id: number) {
    if (confirm('Bạn có chắc chắn muốn xóa ')) {
      this.data.delete(id).subscribe((item) => {
        this.data.getAll().subscribe((item) => {
          this.list = item
        })
      })
    }
  }

}
