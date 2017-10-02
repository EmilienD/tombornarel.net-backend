import {EntityConstructionError, InvalidEntityError} from '../errors'

function isAnImage({filename, index}) {
  return typeof filename === 'string' && typeof index === 'number'
}

function isNotAnImage(image) { return !isAnImage(image)}

function projectValidator(projectDto) {
  if (projectDto.projects !== undefined) {
    throw new EntityConstructionError({
      target: 'Project',
      suspect: 'Gallery',
    })
  }

  const { name, images } = projectDto
  if(!name){ throw new InvalidEntityError({
    entityName: 'Project',
    cause: 'projects must have a name'
  })}
  if(images.some(isNotAnImage)){ throw new InvalidEntityError({
    entityName: 'Project',
    cause: 'image array is wrong'
  }) }
}

class Project {
  constructor(projectDto) {
    projectValidator(projectDto)
    
    const { name, description, images, index } = projectDto
    this.name = name
    this.description = description
    this.images = images
    this.index = index
  }
}

export default Project
