import state from '../infrastructure/state'
import Project from '../models/Project'

async function update(projectName, projectData) {
  const currentState = state.getProjects()
  const newState = currentState
  .filter(gal => projectName !== gal.name)
  .concat(projectData)

  const projects = await state.setProjects(newState)
  const projectDto = projects.filter(gal => projectData.name === gal.name)[0]
  return new Project(projectDto)
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
  const projectDto = projects.filter(gal => gal.name === project.name)[0]
  return new Project(projectDto)
}

function get({name}) {
  const projects = state.getProjects()
  const projectDto = projects.filter(project => project.name === name)[0]
  return new Project(projectDto)
}

function getAll() {
  return state.getProjects().map(dto => new Project(dto))
}

export default { update, remove, add, get, getAll }
