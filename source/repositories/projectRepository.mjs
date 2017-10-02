import state from '../infrastructure/state'

async function update(projectName, projectData) {
  const currentState = state.getProjects()
  const newState = currentState
  .filter(gal => projectName !== gal.name)
  .concat(projectData)

  const projects = await state.setProjects(newState)
  return projects.filter(gal => projectData.name === gal.name)[0]
}

async function remove({name}) {
  const currentState = state.getProjects()
  const newState = currentState
  .filter(project => project.name !== name)
  await state.setProjects(newState)
  return null
}

async function add(project) {
  const currentState = state.getProjects()

  const nameAlreadyUsed = !!currentState
  .filter(gal => gal.name === project.name)
  .length
  if(nameAlreadyUsed) { return null }

  const newState = currentState.concat(project)
  const projects = await state.setProjects(newState)
  return projects.filter(gal => gal.name === project.name)[0]
}

function get({name}) {
  const projects = state.getProjects()
  return projects.filter(project => project.name === name)[0]
}

function getAll() {
  return state.getProjects()
}

export default { update, remove, add, get, getAll }
