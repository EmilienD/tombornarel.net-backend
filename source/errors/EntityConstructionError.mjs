class EntityConstructionError extends Error {
  constructor({target, suspect}){
    let message = target ? `You tried to build a "${target}".` : ''
    message += suspect ?
    `The construction failed because it seems you passed a "${suspect}" to the wrong constructor.`
    : ''
    super(message)
    this.type = 'EntityConstructionError'
  }
}

export default EntityConstructionError
