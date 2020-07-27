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
    this.recognitionsContainer = document.getElementById('recognitions-container')
    this.employeesSelect = document.getElementById('employee-select')
    this.recognitionForm = document.getElementById('new-recognition-form')
    this.recognitionForm.addEventListener('submit', this.createRecognition.bind(this))
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
    // console.log(`${event.target[0].value}`)
    // console.log(`${event.target[1].value}`)
    // console.log(`${event.target[2].value}`)

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
