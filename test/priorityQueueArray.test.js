const { Queue } = require("../src/priorityQueueArray");

describe("Queue", () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  test("should initialize with an empty queue", () => {
    expect(queue.isEmpty()).toBe(true);
    expect(queue.size()).toBe(0);
  });

  test("should enqueue regular elements", () => {
    queue.enqueue("Regular 1");
    queue.enqueue("Regular 2");

    expect(queue.size()).toBe(2);
    expect(queue.nextElement()).toBe("Regular 1");
  });

  test("should enqueue priority elements", () => {
    queue.enqueue("Regular 1");
    queue.enqueue("Priority 1", true);
    queue.enqueue("Regular 2");

    expect(queue.size()).toBe(3);
    expect(queue.nextElement()).toBe("Priority 1"); // Priority should be served first
  });

  test("should maintain order of regular elements after priority elements", () => {
    queue.enqueue("Regular 1");
    queue.enqueue("Priority 1", true);
    queue.enqueue("Regular 2");
    queue.enqueue("Priority 2", true);

    expect(queue.dequeue()).toBe("Priority 1"); // Should return Priority 1
    expect(queue.dequeue()).toBe("Priority 2"); // Should return Priority 2
    expect(queue.dequeue()).toBe("Regular 1"); // Should return Regular 1
    expect(queue.dequeue()).toBe("Regular 2"); // Should return Regular 2
  });

  test("should return null when dequeueing from an empty queue", () => {
    expect(queue.dequeue()).toBe(null);
  });

  test("should return the next element without removing it", () => {
    queue.enqueue("Regular 1");
    queue.enqueue("Priority 1", true);

    expect(queue.nextElement()).toBe("Priority 1"); // Should return Priority 1
    expect(queue.size()).toBe(2); // Size should not change
  });

  test("should clear the queue", () => {
    queue.enqueue("Regular 1");
    queue.enqueue("Priority 1", true);

    expect(queue.size()).toBe(2);

    queue.clear();
    expect(queue.isEmpty()).toBe(true);
    expect(queue.size()).toBe(0);
  });
});
