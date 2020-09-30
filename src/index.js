
exports.min = function min (array) {
    if(!array || array.length === 0) return 0;
    let m = Infinity;
    for (let number of array) {
        if( m > number ) {
            m = number
        }
        console.log(number)
    }
    return m;
}

exports.max = function max (array) {
    if(!array || array.length === 0) return 0;
    let m = -Infinity;
    for (let number of array) {
        if( m < number ) {
            m = number
        }
        console.log(number)
    }
    return m;
}

exports.avg = function avg (array) {
    if(!array || array.length === 0) return 0;
    let res = 0;
    for( let number of array) {
        res+= number;
    }
    return res / array.length;
}
