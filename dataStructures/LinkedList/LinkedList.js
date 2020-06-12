class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    head = null;
    tail = null;
    length = 0;

    push(val) {
        const node = new Node(val);
        if (this.head == null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }

    pop() {
        // make sure the list is not empty
        if (this.head == null) {
            return null;
        }

        let curNode = this.head;

        if (this.head == this.tail) {
            this.head = null;
            this.tail = null;
            this.length = 0;
            return curNode;
        }

        // find the second last item
        while (curNode != null && curNode.next != this.tail) {
            curNode = curNode.next;
        }

        const oldTail = curNode.next;
        curNode.next = null;
        this.tail = curNode;

        this.length--;
        return oldTail;
    }

    unshift(val) {
        const node = new Node(val);
        node.next = this.head;
        this.head = node;
        this.length++;
    }

    shift() {
        if (this.head == null) {
            return null;
        }

        const node = this.head;
        this.head = this.head.next;
        this.length--;

        return node;
    }

    insert(pos, val) {
        if (pos > this.length) {
            return false;
        }

        const node = new Node(val);
        const curNode = this.head;

        if (pos == 0) {
            node.next = this.head;
            this.head = node;
            this.length++;
            return true;
        }

        while (pos > 1) {
            pos--;
            curNode = curNode.next;
        }

        node.next = curNode.next;
        curNode.next = node;
        this.length++;

        return true;
    }
}

module.exports = LinkedList;