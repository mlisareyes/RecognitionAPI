class Recognitions {
  constructor() {
    this.recognitions = []
    this.adapter = new RecognitionsAdapter()
    this.getAllRecognitions()
  }

  getAllRecognitions() {
    this.adapter.getRecognitions()
    .then(recognitions => {
      console.log('notes')
    })
  }
}



// console.log('test recognitions.js')
