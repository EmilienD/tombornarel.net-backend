import state from '../infrastructure/state'

async function update(galleryName, galleryData) {
  const currentState = state.getGalleries()
  const newState = currentState
  .filter(gal => galleryName !== gal.name)
  .push(galleryData)
  const galleries = await state.setGalleries(newState)
  return galleries.filter(gal => galleryData.name === gal.name)[0]
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
  return galleries.filter(gal => gal.name === gallery.name)[0]
}

function get({name}) {
  const galleries = state.getGalleries()
  return galleries.filter(gallery => gallery.name === name)[0]
}

function getAll() {
  return state.getGalleries()
}

export default { update, remove, add, get, getAll }
