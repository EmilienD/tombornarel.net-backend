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

// save current state
const currentState = state.get()

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

async function stateSet(){
  try {
    // update state
    const storedState = await state.set(aState)
    // test operation result
    assert.deepEqual(storedState, aState)
    const storedStateAgain = state.get()
    assert.deepEqual(storedStateAgain, storedState)
    logger.info('OK: stored state as expected')
  } catch (e) {
    logger.error(`KO: couldn't store state properly:`, e)
  }

  // restore state
  state.set(currentState)
}

async function stateSetGalleries() {
  try {
    // update galleries
    const galleries = await state.setGalleries(aState.galleries)
    // test operation result
    assert.deepEqual(galleries, aState.galleries)
    const storedGalleries = state.getGalleries()
    assert.deepEqual(storedGalleries, galleries)
    logger.info('OK: stored galleries as expected')
  } catch(e) {
    logger.error(`KO: couldn't store galleries properly:`, e)
  }
  // restore state
  state.set(currentState)
}

// run tests
stateSet()
stateSetGalleries()
