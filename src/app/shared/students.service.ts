export class StudentsService {
    readXlsxFile = require('read-excel-file');
    schema = {
        'Matricula': {
            prop: 'matricula',
            type: String
        },
        'Ciudadano': {
            prop: 'ciudadano',
            type: String
        },
        'Profesional': {
            prop: 'profesional',
            type: String
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

    fetchData() {
        this.readXlsxFile('', this.schema).then(({rows, errors}) => {
            if(errors.length === 0) {
                
            }

        })
    }
}