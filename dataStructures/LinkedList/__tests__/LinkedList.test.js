const LinkedList = require('../LinkedList');

test('LinkedList works', () => {
    // initialize
    const list = new LinkedList();

    list.push(3);
    expect(list.head.val).toBe(3);
    expect(list.tail.val).toBe(3);

    list.push(2);
    list.push(1);

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

    list.push(1);
    list.push(2);
    list.push(3);

    expect(list.shift().val).toBe(1);

    list.unshift(4);
    expect(list.shift().val).toBe(4);
    expect(list.length).toBe(2);

    list.insert(0, 5);
    expect(list.head.val).toBe(5);

    list.insert(1, 6);
    expect(list.head.next.val).toBe(6);
});