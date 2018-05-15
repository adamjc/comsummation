function comsummation (array) {
  let comsummations

  if (array.length === 1) {
    return array
  } else {
    const head = array.shift()

    comsummations = [].concat(head)
    for (let i = 0; i < array.length; i += 1) {
      comsummations.push(head + array[i])
    }

    comsummations = comsummations.concat(comsummation(array))
  }

  return comsummations.sort()
}

module.exports = comsummation
