const generateTriangle = require('./triangle.define')
const getRectangleWidth = require('./rectangle.define')
const {splitProperty, getUnit} = require('./definer')

// utilities.ts
const prefix = 'tlsh-';

// shapes.ts
const square = (size) => ({width: size, height: size})
const rectangle = (size) => ({width: getRectangleWidth(size), height: size})
const circle = (size) => ({width: size, height: size, borderRadius: '100%'})
const triangleUp = (value) => generateTriangle(['borderRight', 'borderLeft'], 'borderBottom', value)
const triangleDown = (value) => generateTriangle(['borderRight', 'borderLeft'], 'borderTop', value)
const triangleLeft = (value) => generateTriangle(['borderTop', 'borderBottom'], 'borderRight', value)
const triangleRight = (value) => generateTriangle(['borderTop', 'borderBottom'], 'borderLeft', value)
const trapezoid = (value) => {
    let [size, color] = splitProperty(value)
    let unit = getUnit(size);
    let propertyValue:number = parseInt(size.replace(unit))
    return {height: 0, borderBottom: `${propertyValue}${unit} solid ${color}`, borderLeft: `${propertyValue / 4}${unit} solid transparent`, borderRight: `${propertyValue / 4}${unit} solid transparent`, width:size}
}

const parallelogram = (value) => {
    let [width, height] = splitProperty(value)
    return {transform: "skew(20deg)", width:width, height: height}
}

module.exports = {
    square,
    rectangle,
    circle,
    triangleUp,
    triangleDown,
    triangleLeft,
    triangleRight,
    trapezoid,
    parallelogram
}