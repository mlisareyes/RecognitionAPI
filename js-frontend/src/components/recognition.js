class Recognition {
  constructor(recognition) {
    this.id = recognition.id;
    this.employeeId = recognition.employee_id;
    this.content = recognition.content;
    this.sender = recognition.sender;
    this.employeeName = recognition.employee.name;
    // this.employee = this.Recognitions.employees.find(employee => employee.id==recognition.employee_id)
    // this.employee = new Employee();
  }

  renderLi() {
    return `<li data-id=${this.id}> To: ${this.employeeName} ${this.content} written by: ${this.sender}</li>`
  }
}
// console.log('test recognition.js')
// To: ${this.employeeName}
