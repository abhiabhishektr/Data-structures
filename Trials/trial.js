class PriorityQueue {
    constructor() {
      this.queue = [];
    }
  
    enqueue(item, priority) {
      this.queue.push({ item, priority });
      this.queue.sort((a, b) => a.priority - b.priority);
    }
  
    dequeue() {
      if (this.isEmpty()) return "Queue is empty";
      return this.queue.shift().item;
    }
  
    isEmpty() {
      return this.queue.length === 0;
    }
   
    peek() {
      if (this.isEmpty()) return "Queue is empty";
      return this.queue[0].item;
    }
  
    size() {
      return this.queue.length;
    }
  }
  
  class TaskScheduler {
    constructor() {
      this.queue = new PriorityQueue();
    }
  
    scheduleTask(task, priority) {
      this.queue.enqueue(task, priority);
    }
  
    runNextTask() {
      if (this.queue.isEmpty()) {
        console.log("No tasks in the queue.");
        return;
      }
      const nextTask = this.queue.dequeue();
      console.log(`Executing task: ${nextTask}`);
    }
  }
  
  // Example usage:
  const scheduler = new TaskScheduler();
  scheduler.scheduleTask("Run program A", 2);
  scheduler.scheduleTask("Handle I/O request", 1);
  scheduler.scheduleTask("Run program B", 3);
  
//   scheduler.runNextTask(); // Output: Executing task: Handle I/O request
//   scheduler.runNextTask(); // Output: Executing task: Run program A
//   scheduler.runNextTask(); // Output: Executing task: Run program B
//   scheduler.runNextTask(); // Output: No tasks in the queue.
  console.log(scheduler.queue);