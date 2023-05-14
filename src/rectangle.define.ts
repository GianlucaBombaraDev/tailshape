const {getUnit} = require('./definer')

const getRectangleWidth = (size:string):string => {
    let unitProperty = getUnit(size);
    let width = size.replace(unitProperty, "");
    return (parseInt(width) * 2).toString() + unitProperty;
}

module.exports = getRectangleWidth