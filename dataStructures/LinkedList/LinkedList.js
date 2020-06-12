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

    insert(val) {
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
}

module.exports = LinkedList;