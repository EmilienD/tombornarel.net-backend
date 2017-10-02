class InvalidEntity extends Error {
  constructor({entityName, cause}){
    let message = `You couldn't build a "${entityName}" because: ${cause}`
    super(message)
    this.type = 'InvalidEntity'
    this.status = 400
    this.httpMessage = `Your payload is wrong: ${cause}.`
  }
}

export default InvalidEntity
