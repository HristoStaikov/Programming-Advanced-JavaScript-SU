(function solve() {
  String.prototype.ensureStart = function (str) {
    return this.substring(0, str.length) === str ? this.toString() : str + this;
  };

  String.prototype.ensureEnd = function (str) {
    return this.substring(this.length - str.length) === str
      ? this.toString()
      : this + str;
  };

  String.prototype.isEmpty = function () {
    return this.length === 0 ? true : false;
  };

  String.prototype.truncate = function (n) {

    if (n >= 4) {
      if (this.length <= n) {
        return this.toString();
      } else if (this.includes(" ")) {
        let arrStr = this.split(" ");
        let result = "";

        let index = 0;
        let word = arrStr[index];

        while (result.length + word.length + 3 <= n) {
          result += word + " ";
          index++;
          word = arrStr[index];

          if (!word) {
            break;
          }
        }
        result = result.trim();
        return result + "...";
      } else {
        return this.substring(0, n - 3) + "...";
      }
    } else {
      return ".".repeat(n);
    }
  };

  String.format = function (str, ...parms) {
    let stringArr = str.split(" ");
    let stringForReplace = parms;

    stringArr.forEach((element, index) => {
      if (element[0] == "{") {
        let regEx = /\d+/;
        let getNumIndex = Number(element.match(regEx));
        if (typeof stringForReplace[getNumIndex] !== "undefined") {
          stringArr[index] = stringForReplace[getNumIndex];
        }
      }
    });
    return stringArr.join(" ");
  };
})();

let str = "hello my string";
// str = str.truncate(16);
// console.log(str);
// str = str.truncate(14);
// console.log(str);
// str = str.truncate(8);
// console.log(str);
// str = str.truncate(4);
// console.log(str);
// str = str.truncate(2);
// console.log(str);
// str = str = String.format('The {0} {1} fox','quick', 'brown');
// console.log(str);
str = String.format("jumps {0} {1}", "dog");
console.log(str);
