function solve(
  num, operation1, operation2, operation3, operation4, operation5) {

  let array = [operation1, operation2, operation3, operation4, operation5];
  let result = num;

  array.forEach((element) => {
    result = numAction(element)(result);
    console.log(result);
  });

  function numAction(input) {
    return {
      chop: (a) => a / 2,
      dice: (a) => Math.sqrt(a),
      spice: (a) => a + 1,
      bake: (a) => a * 3,
      fillet: (a) => a - a * 0.2,
    }[input];
  }

}
solve("32", "chop", "chop", "chop", "chop", "chop");
solve("9", "dice", "spice", "chop", "bake", "fillet");
