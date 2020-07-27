class Recognition {
  constructor(recognition) {
    this.id = recognition.id;
    this.employeeId = recognition.employee_id;
    this.content = recognition.content;
    this.sender = recognition.sender;
    this.employeeName = recognition.employee.name;
    this.createdAt = recognition.created_at;
  }

  renderLi() {
    return `<div class="card" data-id=${this.id}>
              <h3>${this.employeeName}</h3>
              <p>${this.content}</p>
              <b>written by: ${this.sender}</b><br>
              <small>created at: ${this.createdAt}</small>
            </div>`
          }
  //   // return `<li data-id=${this.id}> To: ${this.employeeName} ${this.content} written by: ${this.sender}</li>`
  // }
}
