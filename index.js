function comsummation (array) {
  if (array.length === 1) {
    return array
  } else {
    const head = array.shift()
    const comsummations = array.map(el => el + head).concat(head)
    
    return comsummation(array).concat(comsummations).sort()
  }
}

module.exports = comsummation
