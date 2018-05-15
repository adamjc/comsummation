function comsummation (array) {
  let comsummations

  if (array.length === 1) {
    return array
  } else {
    const head = array.shift()
    
    comsummations = array.map(el => el + head).concat(head)
    
    comsummations = comsummation(array).concat(comsummations)
  }

  return comsummations.sort()
}

module.exports = comsummation
