class InvalidEntity extends Error {
  constructor({entityName, cause}){
    let message = `You couldn't build a "${entityName}" because: ${cause}`
    super(message)
    this.type = 'InvalidEntity'
  }
}

export default InvalidEntity
