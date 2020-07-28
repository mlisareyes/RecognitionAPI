class Recognitions {
  constructor() {
    this.recognitions = []
    this.employees = []
    this.adapter = new RecognitionsAdapter()
    this.initBindingsAndEventListeners()
    this.getAllRecognitions()
    this.getAllEmployees()
  }

  initBindingsAndEventListeners() {
    this.recognitionsContent = document.getElementById('recognitions-content')
    this.employeesSelect = document.getElementById('employee-select')
    this.recognitionForm = document.getElementById('new-recognition-form')
    this.recognitionForm.addEventListener('submit', this.createRecognition.bind(this))
    this.button = document.getElementById('button')
    this.button.addEventListener('click', this.revealForm.bind(this))
    this.employeeContainer = document.getElementById('employee-container')
    this.employeeTitle = document.querySelector('.employee-title')
  }

  getAllRecognitions() {
    this.adapter.getRecognitions()
    .then(recognitions => {
      recognitions.forEach(recognition => this.recognitions.push(new Recognition(recognition)))
    })
    .then(() => {
      this.render()
    })
    .then(() => {
      this.initBindingsAndEventListenersTwo()
    })
  }

  getAllEmployees() {
    this.adapter.getEmployees()
    .then(employees => {
      employees.forEach(employee => this.employees.push(new Employee(employee)))
    })
    .then(() => {
      this.employeesSelect.innerHTML = this.employeesSelect.innerHTML + this.employees.map(employee => employee.renderEmp()).join('')
    })
  }

  createRecognition(event){
    event.preventDefault()
    const data = {
      employee_id: event.target[0].value,
      content: event.target[1].value,
      sender: event.target[2].value
    }
    this.adapter.createRecognition(data).then(recognition => {
      this.recognitions.push(new Recognition(recognition))
      event.target[0].value = ''
      event.target[1].value = ''
      event.target[2].value = ''
      this.render()
    })
  }

  render() {
    this.recognitionsContent.innerHTML = this.recognitions.map(recognition => recognition.renderLi()).reverse().join('')
  }


  initBindingsAndEventListenersTwo() {
    document.querySelectorAll('h3').forEach(element => element.addEventListener('click', this.renderEmpRecogs.bind(this)))
  }

  revealForm() {
    this.recognitionForm.style.display = "block"
    this.button.style.display = "none"
  }

  renderEmpRecogs(event) {
    let emp = this.employees.find(employee => employee.id == event.target.dataset.id)
    let filteredRecognitions = this.recognitions.filter(recognition => recognition.employeeId == emp.id)
    this.employeeContainer.innerHTML = ''
    filteredRecognitions.forEach(rec => this.renderEmployeeRecognitions(rec))
  }

  renderEmployeeRecognitions(rec) {
    this.employeeTitle.innerHTML = `<h3>${rec.employeeName}'s Recognitions:</h3>`
    this.employeeContainer.innerHTML = this.employeeContainer.innerHTML +
              `<div class="employee-card" data-id="${rec.id}">
              <p>${rec.content}</p>
              <b>written by: ${rec.sender}</b>
              </div>`
  }
}
