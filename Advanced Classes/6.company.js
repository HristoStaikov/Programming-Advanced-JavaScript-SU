class Company {

  constructor() {
    this.departments = {};
  }

  validateInput(parameter) {

    if (parameter === undefined || parameter === "" || parameter === null) { // Validate every parameter
      throw new Error("Invalid input!");
    }
  }

  addEmployee(name, salary, position, department) {

    this.validateInput(name);
    this.validateInput(salary);
    this.validateInput(position);
    this.validateInput(department);

    if (salary < 0) {
      throw new Error("Invalid input!");
    }
    if (!this.departments[department]) {
      this.departments[department] = {};
    }

    this.departments[department][name] = { salary, position };
    return (`New employee is hired. Name: ${name}. Position: ${position}`);
  }

  bestDepartment() {

    let objects = this.departments;
    let departmentsArr = Object.entries(objects);

    for (const dep of departmentsArr) {
      let currentObj = dep[1];
      let count = 0;
      let avrgSalary = 0;
      for (const key in currentObj) {
        count++;
        avrgSalary += currentObj[key].salary;
      }
      dep.push(avrgSalary / count); // Add average salary index in departmentsArr for every department
    }

    let sortedDepartments = departmentsArr.sort((a, b) => b[2] - a[2]); // Sort departments in array by average salary

    let employees = [];

    for (const key in sortedDepartments[0][1]) { // Get the objects key,values from nested object and adds them to employees array
      employees.push([
        key,
        sortedDepartments[0][1][key].salary,
        sortedDepartments[0][1][key].position,
      ]);
    }

    let sortedEmployees = employees.sort((a, b) => {
      if (b[1] !== a[1]) {
        return b[1] - a[1]; // Sort by salary in descending order
      } else {
        return a[0].localeCompare(b[0]); // Sort by name in ascending order if salaries are equal
      }
    });

   
     
    
let result = `Best Department is: ${sortedDepartments[0][0]}\nAverage salary: ${(sortedDepartments[0][2]).toFixed(2)}\n`;
   

for (const employee of sortedEmployees) {
  result += (employee.join(" ") + "\n")
};

return result.trimEnd();
  }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Human resources")
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment());
