function extensibleObject() {
  let extendedObj = {};

  extendedObj.extend = function (objInput) {
    for (const [key, value] of Object.entries(objInput)) {
      if (typeof value === "function") {
        Object.getPrototypeOf(extendedObj)[key] = value;
      } else {
        extendedObj[key] = value;
      }
    }
  };

  return extendedObj;
}
const myObj = extensibleObject();
const template = {
  extensionMethod: function () {},
  extensionProperty: "someString",
};
myObj.extend(template);
