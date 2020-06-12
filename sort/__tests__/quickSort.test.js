const quickSort = require('../quickSort');

test('quick sort works', () => {
    const arr = [12, 3, 456, 7, 898, 10, 4, 5, 6];

    quickSort(arr);

    expect(arr).toEqual([3, 4, 5, 6, 7, 10, 12, 456, 898]);
});

test('quick sort works with empty arr', () => {
    const arr = [];

    quickSort(arr);

    expect(arr).toEqual([]);
});