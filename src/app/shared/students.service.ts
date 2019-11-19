import * as readXlsxFile from 'read-excel-file'
import { Student } from './student.model';

const schema = {
    'Matricula': {
        prop: 'matricula',
        type: String
    },
    'Ciudadano': {
        prop: 'ciudadano',
        type: Number
    },
    'Profesional': {
        prop: 'profesional',
        type: Number
    },
    'Proyecto': {
        prop: 'proyecto',
        type: String
    },
    'Organizacion': {
        prop: 'organizacion',
        type: String
    }
}

export class StudentsService {

    fetchData(id: String) : Student {
        var stud: Student;
        readXlsxFile('', { schema }).then(({rows, errors}) => {
            if(errors.length === 0) {
                rows.forEach(s => {
                    if(s[0]===id) {
                        stud = new Student(s[0],s[1],s[2],s[3],s[4]);
                        return stud;
                    }
                });
            }
        })
        return stud;
    }
}