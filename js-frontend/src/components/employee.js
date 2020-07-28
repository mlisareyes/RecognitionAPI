class Employee {
  constructor(employee) {
    this.id = employee.id;
    this.name = employee.name;
    this.recognitions = employee.recognitions;
  }

  renderEmp() {
    return `<option value=${this.id}> ${this.name}</option>`
  }
}
