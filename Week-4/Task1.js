class Employee {
  constructor(name, age, department, salary) {
      this.name = name;
      this.age = age;
      this.department = department;
      this.salary = salary;
  }
}
function calculateAverageSalary(employees) {
  if (employees.length === 0) return 0;
  
  const totalSalary = employees.reduce((acc, emp) => acc + emp.salary, 0);
  return totalSalary / employees.length;
}
function findEmployeesInDepartment(employees, department) {
  return employees.filter(emp => emp.department === department);
}
function increaseSalary(employees, percentage) {
  employees.forEach(emp => {
      emp.salary *= (1 + percentage / 100);
  });
}
function sortEmployeesByAge(employees) {
  return employees.slice().sort((a, b) => a.age - b.age);
}
let employees = [
  new Employee('Alice', 30, 'HR', 50000),
  new Employee('Bob', 25, 'Engineering', 60000),
  new Employee('Charlie', 35, 'HR', 55000),
  new Employee('David', 28, 'Engineering', 65000)
];


console.log('Average Salary:', calculateAverageSalary(employees));

console.log('HR Department:', findEmployeesInDepartment(employees, 'HR'));

increaseSalary(employees, 10);
console.log('Increased Salary:', employees);

console.log('Sorted by Age:', sortEmployeesByAge(employees));