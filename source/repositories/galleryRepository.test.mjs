import assert from 'assert'
import logger from 'winston'
import faker from 'faker'

import galleryRepository from './galleryRepository'

function projectArrayMaker(number) {
  return Array(number).fill('proj').map(val => `${val} ${faker.lorem.word()}`)
}

const someGalleries = [{
  name: 'gal 1',
  index: 0,
  projects: projectArrayMaker(8),
},{
  name: 'gal 2',
  index: 2,
  projects: projectArrayMaker(0),
},{
  name: 'gal 3',
  index: 8,
  projects: projectArrayMaker(5),
},{
  name: 'gal 4',
  index: 8,
  projects: projectArrayMaker(3),
},
]

// create a gallery
galleryRepository.add(someGalleries[0])
.then(addedGallery => {
  assert.deepEqual(addedGallery, someGalleries[0])
  logger.info('OK: added a gallery')
})
.catch(e => {
  logger.error('KO: Couldn\'t add gallery:', e)
})
