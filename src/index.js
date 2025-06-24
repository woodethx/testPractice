
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
