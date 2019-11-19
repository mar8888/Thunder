import { Component, OnInit } from '@angular/core';
import { StudentsService } from './shared/students.service';
import { Student } from './shared/student.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StudentsService]
})
export class AppComponent{

  student: Student;

  constructor(private data: StudentsService) {
  }

  onQuerySent(id: String) {
    this.student = this.data.fetchData(id);
  }

}
