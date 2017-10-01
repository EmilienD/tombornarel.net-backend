import _ from 'lodash'
import fs from 'fs'
import path from 'path'
import Promise from 'bluebird'
const pfs = Promise.promisifyAll(fs)

import { StatePersistanceError } from '../errors'

const STATE_PATH = path.resolve('storage/state/state.json')

const stateFileContent = fs.readFileSync(STATE_PATH)
let parsedContent
try{
  parsedContent = JSON.parse(stateFileContent)
} catch(e) {
  throw new StatePersistanceError(`State is corrupted:
${stateFileContent}
`)
}

const state = {
  state: parsedContent,
}

function get(){ return _.cloneDeep(state.state) }
function set(newState){
  return pfs.writeFileAsync(STATE_PATH, JSON.stringify(newState))
  .then(() => {
    state.state = newState
    return newState
  })
  .catch(error => new StatePersistanceError(error))
}

function getGalleries() {
  return get().galleries
}

async function setGalleries(galleries) {
  const currentState = get()
  const newState = Object.assign(currentState, {galleries})
  const storedState = await set(newState)
  return storedState.galleries
}

function getProjects() {
  return get().projects
}

function setProjects(projects) {
  const currentState = get()
  const newState = Object.assign(currentState, {projects})
  return set(newState)
  .then(state => state.projects)
}

export default { get, set, getGalleries, setGalleries, getProjects, setProjects }
