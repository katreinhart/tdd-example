const should = require('chai').should()
const calc = require('../src/calculator')

describe('a calculator', () => {

  describe('addition', () => {

    it('can add two positive numbers', () => {
      calc.add(2, 4).should.eq(6)
    })

    it('can add two negative numbers', () => {
      calc.add(-4, -3).should.eq(-7)
    })

    it('can add a positive and negative number', () => {
      calc.add(-4, 2).should.eq(-2)
    })
  })

  describe('subtraction', () => {

    it('can subtract one positive number from another', () => {
      calc.subtract(6, 2).should.eq(4)
    })

    it('can subtract a negative number from a positive number', () => {
      calc.subtract(5, -2).should.eq(7)
    })

    it('can subtract a negative number from another negative number', () => {
      calc.subtract(-3, -6).should.eq(3)
    })
  })

  describe('multiplication', () => {

    it('can multiply whole positive numbers', () => {
      calc.multiply(4, 3).should.eq(12)
    })

    it('can multiply a negative number by a positive number', () => {
      calc.multiply(4, -3).should.eq(-12)
    })

    it('can multiply non-whole numbers', () => {
      calc.multiply(4, 0.5).should.eq(2)
    })
  })

  describe('division', () => {

    it('can divide divisible numbers', () => {
      calc.divide(8, 4).should.eq(2)
    })

    it('can divide rational numbers', () => {
      calc.divide(5, 2).should.eq(2.5)
    })
  })
})
