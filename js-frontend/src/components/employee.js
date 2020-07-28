class Employee {
  constructor(employee) {
    this.id = employee.id;
    this.name = employee.name;
    this.recognitions = employee.recognitions;
  }

  renderEmp() {
    return `<option value=${this.id}> ${this.name}</option>`
  }

  // renderEmployeeRecognitions() {
  //   return `<div class="employee-card data-id"${this.id}>
  //             <h2>${this.name}'s Recognitions:</h2>
  //             <p>${this.recognitions}</p>`
  // }
}
// `<div class="card" data-id=${this.id}>
//           <h3>${this.employeeName}</h3>
//           <p>${this.content}</p>
//           <b>written by: ${this.sender}</b><br>
//           <small>created at: ${this.createdAt}</small>
//         </div>`
