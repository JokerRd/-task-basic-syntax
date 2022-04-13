const RomanToIntegerMap = new Map()
    .set('I', 1)
    .set('V', 5)
    .set('X', 10)
    .set('L', 50)
    .set('C', 100)
    .set('D', 500)
    .set('M', 1000);

export function romanToInteger(str) {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        let sym = str[i];
        console.log(RomanToIntegerMap.get(sym));
        if (
            i + 1 < str.length &&
            RomanToIntegerMap.get(str[i + 1]) > RomanToIntegerMap.get(sym)
        ) {
            result -= RomanToIntegerMap.get(sym);
        } else {
            result += RomanToIntegerMap.get(sym);
        }
    }
    return result;
}
