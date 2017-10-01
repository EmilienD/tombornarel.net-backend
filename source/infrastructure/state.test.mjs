import assert from 'assert'
import logger from 'winston'

import state from './state'


try{
  const currentState = state.get()

  assert.notEqual(currentState.galleries, null)
  assert.notEqual(currentState.galleries, undefined)
  assert.notEqual(currentState.projects, null)
  assert.notEqual(currentState.projects, undefined)
} catch (e) {
  logger.error(`KO: couldn't get state:`, e)
}
logger.info('OK: got state as expected')

// define a state for reuse
const aState = {
  galleries: [{
    name: 'gal 1',
    index: 0,
    projects: ['proj 1'],
  }],
  projects: [{
    name: 'proj 1',
    description: 'p1 description',
    images: ['imageFileName.png'],
    index: 0
  }]
}

// save current state
const currentState = state.get()

// update state
state.set(aState)
.then(storedState => {
  // test operation result
  assert.deepEqual(storedState, aState)
  const storedStateAgain = state.get()
  assert.deepEqual(storedStateAgain, storedState)
  logger.info('OK: stored state as expected')
})
.catch(e => {
  logger.error(`KO: couldn't store state properly:`, e)
})
.finally(() => {
  // restore state
  state.set(currentState)
})

// update galleries
state.setGalleries(aState.galleries)
.then(galleries => {
  // test operation result
  assert.deepEqual(galleries, aState.galleries)
  const storedGalleries = state.getGalleries()
  assert.deepEqual(storedGalleries, galleries)
  logger.info('OK: stored galleries as expected')
})
.catch(e => {
  logger.error(`KO: couldn't store galleries properly:`, e)
})
.finally(() => {
  // restore state
  state.set(currentState)
})
