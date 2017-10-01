class Gallery {
  constructor({name, projects, index}) {
    this.name = name || ''
    this.projects = projects || []
    this.index = typeof index === 'number' ? index : null
  }
}

export default Gallery
