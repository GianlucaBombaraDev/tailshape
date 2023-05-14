const {splitProperty, getUnit} = require('./definer')

/**
 * Basic properties for triangle shape
 * @returns 
 */
const _triangle = ():{} => ({width: 0, height: 0})

/**
 * Basic properties for inactive border triangle shape
 * @param borderSize 
 * @returns 
 */
const _triangleInactiveBorder = (borderSize:string):string => `${borderSize} solid transparent`

/**
 * Basic properties for active border triangle shape
 * @param borderSize 
 * @param color 
 * @returns 
 */
const _triangleActiveBorder = (borderSize:number, borderUnit:string, color:string):string => `${borderSize * 2}${borderUnit} solid ${color}`

/**
 * Generate triangle's property to create shape
 * @param inactive 
 * @param active 
 * @param value 
 * @returns 
 */
function defineTriangle(inactive:string[], active:string, value:string) {
    const [borderSize, color] = splitProperty(value);
    let response = {..._triangle()}
    let unit = getUnit(borderSize);
    let borderSizeValue = borderSize.replace(unit, "");
    response[active] = _triangleActiveBorder(parseInt(borderSizeValue), unit, color);
    inactive.forEach((inactiveItem) => response[inactiveItem] = _triangleInactiveBorder(borderSize));

    return response
}

module.exports = defineTriangle