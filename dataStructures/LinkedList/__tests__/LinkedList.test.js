const LinkedList = require('../LinkedList');

test('LinkedList works', () => {
    // initialize
    const list = new LinkedList();

    list.insert(3);
    expect(list.head.val).toBe(3);
    expect(list.tail.val).toBe(3);

    list.insert(2);
    list.insert(1);

    expect(list.head.val).toBe(3);
    expect(list.tail.val).toBe(1);
    expect(list.length).toBe(3);

    const pop1 = list.pop();
    expect(pop1.val).toBe(1);

    const pop2 = list.pop();
    expect(pop2.val).toBe(2);

    const pop3 = list.pop();
    expect(pop3.val).toBe(3);

    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
    expect(list.length).toBe(0);
});