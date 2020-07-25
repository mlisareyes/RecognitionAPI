class Recognitions {
  constructor() {
    this.recognitions = []
    this.adapter = new RecognitionsAdapter()
    this.getAllRecognitions()
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

  render() {
    const recognitionsContainer = document.getElementById('recognitions-container')
    recognitionsContainer.innerHTML = this.recognitions.map(note => note.renderLi()).join('')
  }
}



console.log('test recognitions.js')
