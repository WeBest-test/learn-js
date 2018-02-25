/*
* Queue
*/
class Queue{
  constructor(){
    this.dataStore = [];
    this.top = 0
  }
  enqueue(element){
    this.dataStore.push(element);
  }
  dequeue(element){
    return this.dataStore.shift();
  }

  front(){
    return this.dataStore[0];
  }

  back(){
    return this.dataStore[this.dataStore.length-1];
  }

  toString(){
    var retStr = "";
    for(var i = 0; i < this.dataStore.length; ++i){
      retStr += this.dataStore[i] + "\n";
    }
    return retStr;
  }
  isEmpty(){
    if(this.dataStore.length == 0){
      return true;
    }else{
      return false;
    }
  }
}


export default Queue;
