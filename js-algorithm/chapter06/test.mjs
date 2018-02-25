
import LList from "./linked-list";
let print = console.log;

// test

var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
cities.display();
console.log(cities);
cities.remove("Carlisle")
cities.display()
