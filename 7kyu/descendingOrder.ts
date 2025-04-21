/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/

export function descendingOrder(n: number): number {
    const numToStr = n.toString();
    const digTabs = numToStr.split('');
    const sortedDigits = digTabs.sort((a, b) => Number(b) - Number(a));
    const reconk = sortedDigits.join('');
    const result = parseInt(reconk, 10);
    return result;
}