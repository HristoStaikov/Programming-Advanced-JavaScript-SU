function rectangle(width, height, color) {

  const rect = {
    width,
    height,
    color,
    calcArea: function () {
      return this.width * this.height;
    },
  };

  function toUpper(obj) {
    
    let firstCharToUpper = obj.color[0].toUpperCase();
    let strSecondToLast = obj.color.substring(1);

    obj.color = firstCharToUpper + strSecondToLast;
  }

  toUpper(rect);

  return rect;
}

let rect = rectangle(4, 5, "red");
console.log(rect);
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
