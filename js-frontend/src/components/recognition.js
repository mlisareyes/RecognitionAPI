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
              <small>created at: ${this.createdAt}</small>
            </div>`

            // let empId = document.getElementbyTagName('h3')
            // empId.addEventListener("click", this.renderEmpRecogs.bind(this))
          }
  //   // return `<li data-id=${this.id}> To: ${this.employeeName} ${this.content} written by: ${this.sender}</li>`
  // }
  // myFunction() {
  //   console.log(`hello`)
  // }
}
// <button id="button-id" type="button" data-id=${this.employeeId}>click to see more recognitions for this employee<button>

// parseInt(document.getElementsByTagName('h3')[1].dataset.id)
