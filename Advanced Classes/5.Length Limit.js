class Stringer {

  constructor(innerString, innerLength) {

    this.innerString = innerString;
    this.innerLength = innerLength;
  }

  increase(length) {

    if (!isNaN(length)) {
      this.innerLength += length;
    }
  }

  decrease(length) {

    if (!isNaN(length)) {
      let currentLent = this.innerLength - length;
      if (currentLent < 0) {
        this.innerLength = 0;
      } else {
        this.innerLength = currentLent;
      }
    }
  }

  toString() {

    let currentLength = this.innerLength;
    let word = this.innerString;

    if (this.innerString.length <= currentLength) {
      return this.innerString;
    }
    if (currentLength === 0) {
      return `...`;
    }

    word = word.substring(0, currentLength) + "...";

    return word;
  }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test
