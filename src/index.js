module.exports = function towelSort(matrix) {
    let arr = new Array();
    if (matrix == null) {
        return arr;
    }
    let index = 0;
    for (let item of matrix) {
        if (index % 2 === 0) {
            arr = arr.concat(item);
        } else {
            arr = arr.concat(item.reverse());
        }
        index++;
    }
    return arr;
};
