function classesThree() {
  
  class Figure {
    constructor() {
      this.units = "cm";
    }

    get area() {
      return 0;
    }

    changeUnits(value) {
      
      if (this.units == "mm") {
        this._width /= 10;
        this._height /= 10;
        this._radius /= 10;
      } else if (this.units == "m") {
        this._width *= 100;
        this._height *= 100;
        this._radius *= 100;
      }
      this.units = value;

      if (this instanceof Circle) {
        this.radius = this.radius;
      } 
    }

    toString() {
      return `Figures units: ${this.units}`;
    }
  }

  class Circle extends Figure {
    constructor(radius, units) {
      super(units);
      this.radius = radius;
    }

    get radius() {
      return this._radius;
    }

    set radius(value) {
      if (this.units === "m") {
        this._radius = value / 100;
      } else if (this.units === "mm") {
        this._radius = value * 10;
      } else {
        this._radius = value;
      }
    }

    get area() {
      return Math.PI * this.radius * this.radius;
    }
    toString() {
      return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius}`;
    }
  }

  class Rectangle extends Figure {
    constructor(width, height, units) {
      super(units);
      this.units = units;
      this.width = width;
      this.height = height;
    }

    get width() {
      return this._width;
    }

    set width(value) {
      if (this.units === "m") {
        this._width = value / 100; // Convert meters to centimeters
      } else if (this.units === "mm") {
        this._width = value * 10; // Convert millimeters to centimeters
      } else {
        this._width = value; // Already in centimeters or other units
      }
    }

    get height() {
      return this._height;
    }

    set height(value) {
      if (this.units === "m") {
        this._height = value / 100; // Convert meters to centimeters
      } else if (this.units === "mm") {
        this._height = value * 10; // Convert millimeters to centimeters
      } else {
        this._height = value; // Already in centimeters or other units
      }
    }

    get area() {
      return this.width * this.height;
    }

    toString() {
      return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
    }
  }

  return {
    Figure,
    Circle,
    Rectangle,
  };
}

let { Figure, Circle, Rectangle } = classesThree();
let c = new Circle(5);
// c.area; // 78.53981633974483
// c.toString(); // Figures units: cm Area: 78.53981633974483 - radius: 5
// let r = new Rectangle(3, 4, "mm");
// r.area; //  1200
// r.toString(); //Figures  units:  mm  Area:  1200  -  width:  30,  height:  40
// r.changeUnits("cm");
// r.area
c.changeUnits("mm");
c.area
c.toString()

// let c = new Circle(5);
// console.log(c.area); // 78.53981633974483
// console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5
// let r = new Rectangle(3, 4, "mm");
// console.log(r.area); // 1200
// console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

// r.changeUnits("cm");
// console.log(r.area); // 12
// console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

// c.changeUnits("mm");
// console.log(c.area); // 7853.981633974483
// console.log(c.toString()); // Figures units: mm Area: 7853.981633974483 - radius: 50
