const units = ['px', 'vh', '%', 'em', 'rem']

/**
 * Split property by delimitator |
 * @param property 
 * @returns 
 */
const splitProperty = (property:string):string[] => property.split('|')

/**
 * Extract unit size by property
 * @param size
 * @returns 
 */
const getUnit = (size:string):string => units.reduce((result, unit) => size.includes(unit) ? unit : result);

module.exports = {
  splitProperty,
  getUnit
}