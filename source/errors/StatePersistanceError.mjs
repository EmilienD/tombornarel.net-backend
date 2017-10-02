class StatePersistanceError extends Error {
  constructor(){
    super(...arguments)
    this.type = 'StatePersistanceError'
    this.status = 500
    this.httpMessage = 'We tried, but we couldn\'t store that data, sorry :('
  }
}

export default StatePersistanceError
