function solution() {
  class Balloon {
    constructor(color, gasWeight) {
      this.color = color;
      this.gasWeight = gasWeight;
    }
  }

  class PartyBalloon extends Balloon {
    constructor(ribbonColor, ribbonLength, color, gasWeight) {
      super(color, gasWeight);
      this.color = ribbonColor;
      this.gasWeight = ribbonLength;
      this.ribbon = {
        color: color,
        length: gasWeight,
      };
    }
    get() {
      return this._ribbon;
    }
  }

  class BirthdayBalloon extends PartyBalloon {
    constructor(ribbonColor, ribbonLength, color, gasWeight,text) {
      super(ribbonColor, ribbonLength, color, gasWeight);
      this.text = text;
    }
    get() {
      return this._text;
    }
  }

  return {
    Balloon,
    PartyBalloon,
    BirthdayBalloon,
  };
}
let classes = solution();
let testBalloon = new classes.Balloon("yellow", 20.5);
let testPartyBalloon = new classes.PartyBalloon("yellow", 20.5, "red", 10.25);
let ribbon = testPartyBalloon.ribbon;
let testBirthdayBalloon = new classes.BirthdayBalloon("yellow", 20.5, "red", 10.25,"text Str")
console.log(testBalloon);
console.log(testPartyBalloon);
console.log(ribbon);
console.log(testBirthdayBalloon);