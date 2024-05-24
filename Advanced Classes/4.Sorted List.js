class List {
  constructor() {
    this.collection = [];
    this.size = 0;
  }

  add(e) {
    if (!isNaN(e)) {
      this.collection.push(e);
      this.collection.sort((a,b) => a-b);
      this.size = this.collection.length;
    }
  }

  remove(i) {
    if (!isNaN(i)) {
      if (i >= 0 && i <= this.collection.length - 1) {
        this.collection.splice(i, 1);
        this.size = this.collection.length;
      } else {
        throw new Error("Invalid index.");
      }
    }
  }

  get(i) {
    if (!isNaN(i)) {
      if (i >= 0 && i <= this.collection.length - 1) {
        return this.collection[i];
      } else {
        throw new Error("Invalid index.");
      }
    }
  }
}

let list = new List();
list.add(5);
list.add(3);
list.remove(0);
console.log(list.collection);
console.log(list.get(0));

