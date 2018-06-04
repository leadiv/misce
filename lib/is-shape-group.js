const wordShape = require('./word-shape');



module.exports = function isShapeGroup(a, b) {

    const aShape = wordShape(a);
    const bShape = wordShape(b);
    const maskedShape = aShape & bShape;

    return maskedShape === aShape || maskedShape === bShape
}
