class StatePersistanceError extends Error {
  constructor(){
    super()
    this.type = 'StatePersistanceError'
    
  }
}

export default StatePersistanceError
