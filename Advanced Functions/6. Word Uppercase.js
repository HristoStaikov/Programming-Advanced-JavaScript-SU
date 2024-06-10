function solve(input) {
  let result = extract(input).join(", ").toUpperCase();

  function extract(text) {
    let regEx = /[A-Za-z0-9]+/gm;
    return text.match(regEx);
  }
  console.log(result);
}
solve("Hi, how are you?");
