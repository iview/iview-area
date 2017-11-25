let util = {};

util.levelArr = [0, 1, 2, 3];

util.oneOf = (item, arr) => {
    return arr.some(i => {
        return i === item;
    });
};
util.getIndex = (list, name) => {
    for (const i in list) {
        if (list[i] === name) {
            return i;
        }
    }
};

util.isObject = (value) => {
    const type = typeof value;
    return value !== null && (type === 'object' || type === 'function');
};

util.dataType = ['all', 'code', 'name'];

util.checkLevel = val => {
    return util.oneOf(val, util.levelArr);
};

export default util;
