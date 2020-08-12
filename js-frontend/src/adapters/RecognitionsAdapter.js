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
      body: JSON.stringify({ recognition }),
    }).then(response => response.json())
  }

  removeRecognition(recognition) {
    return fetch(`${this.baseUrl}/${recognition}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      }
    })
    .then(response => response.json())
  }
}
