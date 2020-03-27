class Emplyee {
    constructor(f_name, l_name, yob) {
        //this.indexNumber = indexNumber;
        this.f_name = f_name;
        this.l_name = l_name;
        this.year_of_birth = yob;
        //this.department = department;
    }


}

let arr = [(new Emplyee('Иван', 'Петров', 1972)), (new Emplyee('Василий', 'Сергеев', 1983)), (new Emplyee('Анна', 'Витальева', 1991))];

console.log(Object.keys(arr[0]));

class EmpTable {
    constructor(array) {
        this.header = Object.keys(array[0]);
        this.data = array;
    }

    getCode() {
        let table = document.querySelector('table');
        let data = Object.keys(this.header[0]);

        function generateTableHead(table, data) {
            let thead = table.createTHead();
            let row = thead.insertRow();
            for (let key of data) {
              let th = document.createElement('th');
              let text = document.createTextNode(key);
              th.appendChild(text);
              row.appendChild(th);
            }
          
        }
        
        function generateTable(table, data) {
            for (let element of data) {
              let row = table.insertRow();
              for (key in element) {
                let cell = row.insertCell();
                let text = document.createTextNode(element[key]);
                cell.appendChild(text);
              }
            }
          }
                   
          generateTableHead(table, data);
          generateTable(table, this.data);       
                
    }
}

let table1 = new EmpTable(arr);

console.log(table1);
console.log(table1.header);
table1.getCode();