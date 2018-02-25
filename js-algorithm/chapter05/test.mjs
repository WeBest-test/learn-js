
import Queue from "./queue";
let print = console.log;

// test


var q = new Queue();
q.enqueue("Meredith");
q.enqueue("Cynthia");
q.enqueue("Jennifer");
print(q.toString());

q.dequeue();
print(q.toString());

print("Front of queue: " + q.front());
print("Back of queue: " + q.back());
