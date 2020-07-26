class Recognitions {
  constructor() {
    this.recognitions = []
    this.adapter = new RecognitionsAdapter()
    this.employees = []
    this.initBindingsAndEventListeners()
    this.getAllRecognitions()
    this.getAllEmployees()
  }

  initBindingsAndEventListeners() {
    this.recognitionsContainer = document.getElementById('recognitions-container')
    this.employeesSelect = document.getElementById('employee-select')
    this.recognitionForm = document.getElementById('new-recognition-form')
    this.recognitionForm.addEventListener('submit', this.createRecognition.bind(this))
    // this.button = document.getElementById('count')
    // this.button.addEventListener('onclick', this.renderEmployeeCount())
    // this.employeesContainer = document.getElementById('employees-container')
    // this.employeesSearch = document.getElementById('employee')
    // this.employeesSearch.addEventListener('keyup', this.searchEmployee.bind(this))
  }

  createRecognition(event) {
    event.preventDefault()
    console.log('submitted')
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

  render() {
    this.recognitionsContainer.innerHTML = this.recognitions.map(recognition => recognition.renderLi()).join('')
  }
}

console.log('test recognitions.js')

// createRecognition(event) {
  //   event.preventDefault()
  //   console.log(`${event.target[3].value}`)
  //
  //   // this.adapter.createRecognition(recognition)
  //   //   .then(recognition => {
    //   //     let newRecognition = new Recognition(recognition)
    //   //     this.recognitions.push(newRecognition)
    //   //   })
    // }

// renderEmployeeCount() {
  //   // console.log(`${employees[2].recogntions}`)
  //   this.adapter.getEmployees()
  //   // .then(employees => {
    //   //   employees.forEach(employee => this.employees.push(new Employee(employee)))
    //   // })
    //   .then(() => {
      //     this.employeesContainer.innerHTML = this.employees.map(employee => employee.renderEmpLi()).join('')
      //   })
      // }

      // searchEmployee(event) {
        //   const searchString = event.target.value.toLowerCase();
        //   const filteredEmployees = this.employees.filter((employee) => {
          //     return (
            //       employee.name.toLowerCase().includes(searchString)
            //     )
            //   })
            //   console.log(`${filteredEmployees[0].name}`)
            // }
            //
