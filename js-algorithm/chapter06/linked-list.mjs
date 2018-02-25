/*
* Linked List
*/
let print = console.log;
// Node包含element和下一个element的引用
class Node{
  constructor(ele){
    this.ele = ele;
    this.next = null;
  }
}
class LList{
  constructor(){
    this.head = new Node("head");
  }
  find(item){
    let currNode = this.head;
    while(currNode.ele != item){ // item和ele含义一样
      currNode = currNode.next;
    }
    return currNode;
  }
  findPrevious(item){
    var currNode = this.head;
    while(!(currNode.next == null) &&
    (currNode.next.element != item)){
      currNode = currNode.next;
    }
    return currNode;
  }

  insert(newEle, item){
    let newNode = new Node(newEle)
    let current = this.find(item)
    newNode.next = current.next;
    current.next = newNode;
  }

  remove(item){
    var prevNode = this.findPrevious(item);
    if(!(prevNode.next == null)){
      prevNode.next = prevNode.next.next;
    }
  }


  display(){
    var currNode = this.head;
    while(!(currNode.next == null)){
      print(currNode.next.ele);
      currNode = currNode.next;
    }
  }
}


// export default LList;
export {Node, LList as default};
