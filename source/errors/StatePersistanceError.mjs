class StatePersistanceError extends Error {
  constructor(){
    super(...arguments)
    this.type = 'StatePersistanceError'
  }
}

export default StatePersistanceError
