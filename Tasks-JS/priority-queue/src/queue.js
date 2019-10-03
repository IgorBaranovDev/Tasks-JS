const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		this.maxSize = maxSize || 30;
		this.heap = new MaxHeap();
	}

	push(data, priority) {
		if (this.size() >= this.maxSize) {
			aler('Queue - max Size.')
		}
		this.heap.push(data, priority);
	}

	shift() {
		if (this.isEmpty()) {
			alert('Queue is empty.')
		}
		let value = this.heap.pop();
		return value;
	}

	size() {
		return this.heap.size();
	}

	isEmpty() {
		return this.heap.isEmpty();

	}
}


module.exports = PriorityQueue;
