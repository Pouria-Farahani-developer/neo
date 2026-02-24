export function toPersianNumber(input: string | number) {
    const persianDigits = ["۰","۱","۲","۳","۴","۵","۶","۷","۸","۹"];
    return input
        .toString()
        .replace(/\d/g, (d) => persianDigits[parseInt(d)]);
}