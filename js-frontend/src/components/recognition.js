class Recognition {
  constructor(recognition) {
    this.id = recognition.id;
    this.sender = recognition.sender;
    this.content = recognition.content;
    this.employeeId = recognition.employee_id;
  }

  renderLi() {
    return `<li data-id=${this.id}> To: ${this.employeeId(name)} ${this.content} written by: ${this.sender}</li>`
  }
}
// console.log('test recognition.js')
