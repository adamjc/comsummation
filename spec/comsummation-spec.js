const comsummation = require('../index.js')

describe('Comsummation', () => {
  it('Should probably work', () => {
    expect(comsummation([1])).toEqual([1])
    expect(comsummation([1, 2])).toEqual([1, 2, 3])
    expect(comsummation([1, 2, 3])).toEqual([1, 2, 3, 3, 4, 5])
  })
})