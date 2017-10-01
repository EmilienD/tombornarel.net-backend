import _ from 'lodash'
import fs from 'fs'
import Promise from 'bluebird'
const pfs = Promise.promisifyAll(fs)

import { StatePersistanceError } from './errors'

const STATE_PATH = '../storage/state/state.json'

const state = {
  state: fs.readFileSync(STATE_PATH),
}

function get(){ return _.cloneDeep(state.state) }
function set(newState){
  return pfs.writeFileAsync(STATE_PATH, JSON.stringify(newState))
  .then(() => {
    state.state = newState
  })
  .catch(error => new StatePersistanceError(error))
}

function getGalleries() {
  return get().galleries
}

function setGalleries(galleriesArray) {
  const currentState = get()
  const newState = Object.assign(currentState, {galleries: galleriesArray})
  set(newState)
}

export default { get, set, getGalleries, setGalleries }
