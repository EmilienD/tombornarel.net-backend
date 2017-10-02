import state from '../infrastructure/state'
import Gallery from '../models/Gallery'

async function update(galleryName, galleryData) {
  const currentState = state.getGalleries()
  const newState = currentState
  .filter(gal => galleryName !== gal.name)
  .concat(galleryData)

  const galleries = await state.setGalleries(newState)
  const galleryDto = galleries.filter(gal => galleryData.name === gal.name)[0]
  return new Gallery(galleryDto)
}

async function remove({name}) {
  const currentState = state.getGalleries()
  const newState = currentState
  .filter(gallery => gallery.name !== name)
  await state.setGalleries(newState)
  return null
}

async function add(gallery) {
  const currentState = state.getGalleries()

  const nameAlreadyUsed = !!currentState
  .filter(gal => gal.name === gallery.name)
  .length
  if(nameAlreadyUsed) { return null }

  const newState = currentState.concat(gallery)
  const galleries = await state.setGalleries(newState)
  const galleryDto = galleries.filter(gal => gal.name === gallery.name)[0]
  return new Gallery(galleryDto)
}

function get({name}) {
  const galleries = state.getGalleries()
  const galleryDto = galleries.filter(gallery => gallery.name === name)[0]
  return new Gallery(galleryDto)
}

function getAll() {
  return state.getGalleries().map(dto => new Gallery(dto))
}

export default { update, remove, add, get, getAll }
