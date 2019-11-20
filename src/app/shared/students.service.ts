import { Student } from './student.model';

import * as xlsx from 'xlsx';

type AOA = any[][];


// const schema = {
//     'Matricula': {
//         prop: 'matricula',
//         type: String
//     },
//     'Ciudadano': {
//         prop: 'ciudadano',
//         type: Number
//     },
//     'Profesional': {
//         prop: 'profesional',
//         type: Number
//     },
//     'Proyecto': {
//         prop: 'proyecto',
//         type: String
//     },
//     'Organizacion': {
//         prop: 'organizacion',
//         type: String
//     }
// }

export class StudentsService {
    data: AOA = [[1,2], [3,4]];
    fileName: string = 'alumnos.xlsx';

    fetchData(id: String) : Student {

        const wb: xlsx.WorkBook = xlsx.read(this.fileName);

        console.log(wb);

        var stud = new Student('1',1,2,'2','2');

        return stud;
    }
}