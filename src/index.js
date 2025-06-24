
export function capitalize(string){
    if(typeof string != 'string') return;
    let result = string.toLowerCase();
    let arr = result.split('');
    arr[0] = arr[0].toUpperCase();
    result = arr.join('')
    return result;
}
export function reverseString(string){
    if(typeof string != 'string') return;
    let arr = string.split('');
    arr = arr.reverse();
    return arr.join('');
}
export const calculator = {
    add(a,b){
        return a+b;
    },
    subtract(a,b){
        return a-b;
    },
    divide(a,b){
        return a/b;
    },
    multiply(a,b){
        return a*b;
    }
}
export function caesarCipher(string, shift){
    let arr = []
    for (let i = 0; i < string.length; i++) {
        let code = string.charCodeAt(i);
        let upper = string.charAt(i) == string.charAt(i).toUpperCase();
        let nonABC = code < 65 || (code > 90 && code < 97) || code > 122
        if(!nonABC) code = code+shift;
        if(code > 122) code = code - 26;
        if(upper && code > 90) code = code - 26;
        arr.push(String.fromCharCode(code));
    }
    return arr.join('');
}
export function analyzeArray(arr){
    let min = null;
    let max = null;
    let sum = 0;
    arr.forEach(el  => {
        if(!min || min > el) min = el;
        if(!max || max < el) max = el;
        sum += el;
    })
    return {
        average: sum/arr.length,
        min: min,
        max: max,
        length: arr.length
    }
}
