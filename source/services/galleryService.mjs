import galleryRepository from '../repositories/galleryRepository'

function add(gallery){
  return galleryRepository.add(gallery)
}

function update(originalName, gallery) {
  return galleryRepository.update(originalName, gallery)
}

function remove(gallery){
  return galleryRepository.remove(gallery)
}

function get(gallery) {
  return galleryRepository.get(gallery)
}

function getAll(){
  return galleryRepository.getAll()
}

export default { add, update, remove, get, getAll }
