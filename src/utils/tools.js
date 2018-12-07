/**
   对象原数组的深度拷贝.source是原数据,extendObj实新增的键值对
 **/
export const DeepCopy = (source, extendObj) => {
    var sourecCopy = source instanceof Array ? [] : {};
    for (var item in source) {
        sourceCopy[item] = typeof source[item] === "Object" ? DeepCopy(source[item], extendObj) : source[item];
        if (typeof extendObj === 'object' && !(sourecCopy instanceof Array)) {
            for (var param in extendObj) {
                sourecCopy[param] = extendObj[param];
            }
        }
    }
    return sourecCopy;
}