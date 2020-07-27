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
  }

  getAllRecognitions() {
    this.adapter.getRecognitions()
    .then(recognitions => {
      recognitions.forEach(recognition => this.recognitions.push(new Recognition(recognition)))
    })
    .then(() => {
      this.render()
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
    this.recognitionsContent.innerHTML = this.recognitions.map(recognition => recognition.renderLi()).join('')
  }

  revealForm() {
    document.getElementById('new-recognition-form').style.visibility = "visible"
    this.button.style.visibility = "hidden"
  }
}
