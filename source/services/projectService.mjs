function add({name, index, imageArray = []}){
  return Promise.resolve(`Added project ${name} at place ${index} containing images ${imageArray.join(', ')}.`)
}

function update({originalName, newName, imageArray, description}) {
  return Promise.resolve(`Updated project ${originalName}, now named ${newName} containing projects ${imageArray.join(', ')}, described as "${description}".`)
}

function remove({name}){
  return Promise.resolve(`Deleted project ${name}`)
}

function get({name}) {
  return Promise.resolve(`Here's project ${name}`)
}

export default { add, update, remove, get }
