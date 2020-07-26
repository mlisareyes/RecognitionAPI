class Employee {
  constructor(employee) {
    this.id = employee.id;
    this.name = employee.name;
    this.recogntions = employee.recognitions;
  }

  renderEmp() {
    return `<option value=${this.id}> ${this.name}</option>`
  }

  // renderEmpLi() {
  //   return `<li data-id=${this.id}> ${this.name} - ${this.recognitions.count} recognitons</li>`
  // }
}

// console.log("test employee.js")
