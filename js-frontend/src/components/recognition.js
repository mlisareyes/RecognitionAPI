class Recognition {
  constructor(recognition) {
    this.id = recognition.id;
    this.sender = recognition.sender;
    this.content = recognition.content;
    this.employeeId = recognition.employee_id;
    this.employeeName = recognition.employee.name;
  }

  renderLi() {
    return `<li data-id=${this.id}> To: ${this.employeeName} ${this.content} written by: ${this.sender}</li>`
  }
}
// console.log('test recognition.js')
