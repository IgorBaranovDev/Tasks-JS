const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.node = [];
		this.parentNodes = [];
	}

	push(data, priority) {
		let node = new Node(data, priority);
		this.insertNode(node);
		this.shiftNodeUp(node);
	}

	pop() {
		if (this.root === null) {
			return;
		} else {
			let dRoot = this.detachRoot();
			this.restoreRootFromLastInsertedNode(dRoot);
			this.shiftNodeDown(this.root);
			return dRoot.data;
		}
	}

	detachRoot() {
		const currentRoot = this.root;

		if (this.root.left !== null) {
			this.root.left.parent = null;
		}

		if (this.root.right !== null) {
			this.root.right.parent = null;
		}

		this.root = null;

		if (this.parentNodes.indexOf(currentRoot) >= 0) {
			this.parentNodes.shift();
		}
		return currentRoot;
	}

	restoreRootFromLastInsertedNode(detached) {
		const last = this.parentNodes[this.parentNodes.length - 1];

		if (this.size() === 1 || detached.left === null) {
			this.root = null;
			return;
		}

		const lastParent = last.parent;
		last.remove();
		this.root = last;

		if (last === detached.left) {
			last.left = null;
			last.right = null;
			last.parent = null;
		} else if (last === detached.right) {
			last.right = null;
			last.parent = null;
			last.left = detached.left;
			last.left.parent = last;
			this.parentNodes.unshift(last);
			this.parentNodes.pop();
		} else {
			last.left = detached.left;
			last.left.parent = last;
			last.right = detached.right;
			last.right.parent = last;
			last.parent = null;
			if (this.parentNodes.indexOf(lastParent) === -1) {
				this.parentNodes.unshift(lastParent);
			}
			this.parentNodes.pop();
		}
	}

	size() {
		function inOrder(node) {
			if (!node) {
				return 0;
			} else {
				const countLeft = (node.left && (node.left.data != node.data)) ? inOrder(node.left) : 0;
				const countRight = (node.right && (node.right.data != node.data)) ? inOrder(node.right) : 0;
				return countLeft + countRight + 1;
			}
		}
		const count = inOrder(this.root);
		return count;
	}

	isEmpty() {
		return this.root === null;
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
	}

	insertNode(node) {
		if (this.root === null) {
			this.root = node;
		} else {
			if (this.parentNodes[0].left === null) {
				this.parentNodes[0].left = node;
				node.parent = this.parentNodes[0];
			} else if (this.parentNodes[0].right === null) {
				this.parentNodes[0].right = node;
				node.parent = this.parentNodes[0];
				this.parentNodes.shift();
			}
		}
		this.parentNodes.push(node);
	}

	shiftNodeUp(node) {
		if (node.parent === null) {
			this.root = node;
			return;
		}
		if (node.priority > node.parent.priority) {
			const parentIndex = this.parentNodes.indexOf(node.parent);
			const nodeIndex = this.parentNodes.indexOf(node);

			if (parentIndex !== -1) {
				this.parentNodes[parentIndex] = node;
			}
			if (nodeIndex !== -1) {
				this.parentNodes[nodeIndex] = node.parent;
			}
			node.swapWithParent();
			this.shiftNodeUp(node);
		}
	}

	shiftNodeDown(node) {
		if (node === null || (node.left === null && node.right === null)) {
			return;
		}

		if (node.right === null || node.left.priority > node.right.priority) {
			if (node.left.priority > node.priority) {
				const leftChildIndex = this.parentNodes.indexOf(node.left);
				const leftNodeIndex = this.parentNodes.indexOf(node);

				if (this.root === node) {
					this.root = node.left;
				}
				if (leftChildIndex !== -1) {
					this.parentNodes[leftChildIndex] = node;
				}
				if (leftNodeIndex !== -1) {
					this.parentNodes[leftNodeIndex] = node.left;
				}
				node.left.swapWithParent();
				this.shiftNodeDown(node);
			}
		} else if (node.left === null || node.left.priority < node.right.priority) {
			if (node.right.priority > node.priority) {
				const rightChildIndex = this.parentNodes.indexOf(node.right);
				const rigthNodeIndex = this.parentNodes.indexOf(node);

				if (this.root === node) {
					this.root = node.right;
				}
				if (rightChildIndex !== -1) {
					this.parentNodes[rightChildIndex] = node;
				}
				if (rigthNodeIndex !== -1) {
					this.parentNodes[rigthNodeIndex] = node.right;
				}
				node.right.swapWithParent();
				this.shiftNodeDown(node);
			}
		}
	}
}

module.exports = MaxHeap;
