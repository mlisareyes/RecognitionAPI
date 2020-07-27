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

  // createRecognition(value) {
  //   const recognition = {
  //     body: value,
  //   }
  //   return fetch('http://localhost:3000/api/v1/recognitions', {
  //     method: 'POST',
  //     headers: {
  //       'content-type': 'application/json',
  //     },
  //     body: JSON.stringify({ recognition }),
  //   }).then(response => response.json())
  // }
  createRecognition(data) {
    const recognition = {
      employee_id: data.employee_id,
      content: data.content,
      sender: data.sender
    }
    return fetch(this.baseUrl, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        recognition: {
          employee_id: recognition.employee_id,
          content: recognition.content,
          sender: recognition.sender
        }
      }),
    }).then(response => response.json())

    // return fetch(this.baseUrl, {
    //   method: 'POST',
    //   headers: {
    //     'content-type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     recognition: {
    //       sender: event.target[1].value,
    //       content: event.target[2].value,
    //       employee_id: event.target[3].value
    //     }
    //   }).then(response => response.json())
    // })
  }
}



// console.log('test RecognitionsAdapter')
// this talks to the backend API
// also similar to `FetchRequests.js`
