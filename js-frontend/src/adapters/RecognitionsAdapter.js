class RecognitionsAdapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/recognitions'
  }

  getRecognitions() {
    return fetch(this.baseUrl)
    .then(response => response.json())
  }
}


// console.log('test RecognitionsAdapter')


// this talks to the backend API
// also similar to `FetchRequests.js`
