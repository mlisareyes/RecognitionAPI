class RecognitionsAdapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/recognitions'
  }

  getRecognitions() {
    return fetch(this.baseUrl)
    .then(response => response.json())
  }

  getEmployees() {
    return fetch('http://localhost:3000/api/v1/employees')
    .then(response => response.json())
  }

  // createRecognition(event) {
  //   return fetch(this.baseUrl, {
  //    method: 'POST',
  //    headers: {
  //      'content-type': 'application/json',
  //    },
  //    body: JSON.stringify({
  //      recognition: {
  //        employee: event.target[0].value,
  //        content: event.target[1].value,
  //        sender: event.target[2].value,
  //        employeeId: event.target[3].value
  //      }
  //    }),
  //  }).then(res => res.json())
  // }
}



// console.log('test RecognitionsAdapter')
// this talks to the backend API
// also similar to `FetchRequests.js`
