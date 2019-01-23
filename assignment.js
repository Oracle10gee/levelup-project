/**
 *  Report Class for processing students names, ages and grades into reports
 *
 * @class Report
 */
class Report {

    /**
     * Creates an instance of Report with a
     default parameter.
     * @param {
         Array. < {
             grade: String,
             first_name:String,
             last_name:String,
             age:Number
         } > students
     }
     * @memberof Report
     */
    constructor([...students] = [{
        grade: '',
        first_name: '',
        last_name: '',
        age: 0
    }]) {
        this.students = students
    }

    /**
     *Getter for returning students sorted by their grades
     *
     * @readonly
     * @memberof Report
     */
    get getStudentsByGrade() {
        return this.sortByGrade();
    }

    /**
     *Method for sorting students array by age
     *
     * @returns students
     * @memberof report
     */
    sortByGrade() {
        return this.students.sort((studentA, studentB) => {
            //  Convert both studentA & studentB grades to lowercase
            let gradeA = studentA.grade.toLowerCase();
            let gradeB = studentB.grade.toLowerCase();

            if (gradeA < gradeB) { // gradeA <  gradeB means gradeA is lower than gradeB
                return -1; //   return false
            } else if (gradeA > gradeB) { // gradeA > gradeB means gradeA is greater than gradeB
                return 1; //    return true
            }
        });
    }

    /**
     *  Getter for returning students with age >= 16
     *
     * @readonly
     * @memberof Report
     */
    get getStudentsByAge() {
        return this.filterByAge();
    }

    /**
     *  Method for filtering out students with age >= 16
     *
     * @returns students
     * @memberof Report
     */
    filterByAge() {
        return this.students.filter(student => {
            if (student.age >= 16) {
                return student;
            }
        });
    }

    /**
     *  Getter for displaying students grades and age
     *
     * @readonly
     * @memberof Report
     */
    get showReport() {
        return this.displayAgeAndGrades();
    }

    /**
     *  Create an array of students name and grade
     *
     * @returns {Array.<{name:string,grade:string}>} report
     * @memberof Report
     */
    displayAgeAndGrades() {

        let report = [];

        //  format each students first_name, last_nam into name, pass name and grade object into report Array
        this.students.forEach(student => {
            let name = `${student.first_name} ${student.last_name}`;
            report.push({
                name,
                grade: student.grade
            })
        });

        return report;
    }
}


const students = [{
    grade: 'B',
    first_name: 'Ayedun',
    last_name: 'olakunle',
    age: 24
}, {
    grade: 'A',
    first_name: 'patrick',
    last_name: 'foh',
    age: 27
}, {
    grade: 'A',
    first_name: 'Daniel',
    last_name: 'Barde',
    age: 30
}]

let report1 = new Report(students);

console.log(report1.getStudentsByGrade);
console.log(report1.getStudentsByAge);
console.log(report1.showReport)