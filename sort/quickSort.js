const quickSort = (arr) => {
    // select first element as pivot
    // determine its position
    // divide arr and quickSort sub array
    quickSortHelper(arr, 0, arr.length - 1);
}

const quickSortHelper = (arr, left, right) => {
    if (left >= right) {
        return;
    }
    let pivot = left;
    for (let i = left; i <= right; i++) {
        // if current value smaller than first value, move pivot first, then switch
        if (arr[i] < arr[left]) {
            pivot++;
            [arr[pivot], arr[i]] = [arr[i], arr[pivot]];
        }
    }
    [arr[pivot], arr[left]] = [arr[left], arr[pivot]];

    quickSortHelper(arr, left, pivot - 1);
    quickSortHelper(arr, pivot + 1, right);
}

module.exports = quickSort;