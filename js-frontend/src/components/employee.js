class Employee {
  constructor(employee) {
    this.id = employee.id;
    this.name = employee.name;
  }
  
  renderEmp() {
    return `<option value=${this.id}> ${this.name}</option>`
  }
}
