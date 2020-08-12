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
              <h3 data-id="${this.employeeId}">${this.employeeName}</h3>
              <p>${this.content}</p>
              <b>written by: ${this.sender}</b><br>
              <small>created at: ${this.createdAt}</small><br><br>
              <button name="delete-button" data-id=${this.id}>Delete</button>
            </div>`
          }
}
