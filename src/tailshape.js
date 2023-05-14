const plugin = require('tailwindcss/plugin')
const shapes = require('./shapes');

const shapeConfig = plugin(
    function ({matchUtilities}) {
      matchUtilities(
        {
          'tlsh-square': (value) => shapes.square(value),
          'tlsh-rectangle': (value) => shapes.rectangle(value),
          'tlsh-circle': (value) => shapes.circle(value),
          'tlsh-triangleUp': (value) => shapes.triangleUp(value),
          'tlsh-triangleDown': (value) => shapes.triangleDown(value),
          'tlsh-triangleLeft': (value) => shapes.triangleLeft(value),
          'tlsh-triangleRight': (value) => shapes.triangleRight(value),
          'tlsh-trapezoid': (value) => shapes.trapezoid(value),
          'tlsh-parallelogram': (value) => shapes.parallelogram(value),
        }
      )
    },
    {},
  )
  
  module.exports = shapeConfig