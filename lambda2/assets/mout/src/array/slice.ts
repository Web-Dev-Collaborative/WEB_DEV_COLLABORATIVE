/**
 * Create slice of source array or array-like object
 */
function slice<T>(arr: T[] | IArguments, start?: number, end?: number): T[] {
    const len = arr.length;

    if (start == null) {
        start = 0;
    } else if (start < 0) {
        start = Math.max(len + start, 0);
    } else {
        start = Math.min(start, len);
    }

    if (end == null) {
        end = len;
    } else if (end < 0) {
        end = Math.max(len + end, 0);
    } else {
        end = Math.min(end, len);
    }

    const result = [];
    while (start < end) {
        result.push(arr[start++]);
    }

    return result;
}

export default slice;
