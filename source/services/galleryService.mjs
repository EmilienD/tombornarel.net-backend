import Promise from 'bluebird'

function add({name, index, projectArray = []}){
  return Promise.resolve(`Added gallery ${name} at place ${index} containing projects ${projectArray.join(', ')}.`)
}

function update({originalName, newName, projectArray}) {
  return Promise.resolve(`Updated gallery ${originalName}, now named ${newName} containing projects ${projectArray.join(', ')}.`)
}

function remove({name}){
  return Promise.resolve(`Deleted gallery ${name}`)
}

function get({name}) {
  return Promise.resolve(`Here's gallery ${name}`)
}

function getAll(){
  return
}

export default { add, update, remove, get, getAll }
