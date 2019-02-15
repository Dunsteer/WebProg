const node = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: null
            }
        }
    }
}

//3. Obrnuti elemente lancane liste bez korišæenja pomoænog niza
function reverse(n) {
    let prev = null;
    let curr = n;
    while (curr != null) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    n = prev;

    return n;
}

console.log(reverse(node));