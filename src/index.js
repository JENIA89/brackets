module.exports = function check(str, bracketsConfig) {
    const confArr = bracketsConfig.map((item) => item.join(""));

    for (let i = 0; i < confArr.length; ) {
        if (str.includes(confArr[i])) {
            str = str.replace(confArr[i], "");
            i = 0;
            continue;
        }
        i++;
    }

    return str.length === 0 ? true : false;
};
