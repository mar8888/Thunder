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
    if(id === 'A01196903') {
      console.log(id);
      console.log('120 horas de ciudadano');
      console.log('0 horas de profesional');
      console.log('SIASS con Thunder');
    }

    if(id === 'A01197048') {
      console.log(id);
      console.log('60 horas de ciudadano');
      console.log('0 horas de profesional');
      console.log("Web Dev con CVA");
    }
    this.student = this.data.fetchData(id);
  }

}
