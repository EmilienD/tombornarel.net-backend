import {EntityConstructionError} from '../errors'

class Gallery {
  constructor(galleryDto) {
    if (galleryDto.images !== undefined
      || galleryDto.description !== undefined){
      throw new EntityConstructionError({target:'Gallery', suspect:'Project'})
    }

    const {name, projects, index} = galleryDto
    this.name = name || ''
    this.projects = projects || []
    this.index = typeof index === 'number' ? index : null
  }
}

export default Gallery
