// Rectangle class definition
class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  // Getter for width
  get width() {
    return this._width;
  }

  // Getter for height
  get height() {
    return this._height;
  }

  // Method to calculate area
  getArea() {
    return this._width * this._height;
  }
}

// Square class definition, extending Rectangle
class Square extends Rectangle {
  constructor(side) {
    // Call parent class constructor with side for both width and height
    super(side, side);
    this._side = side;
  }

  // Method to calculate perimeter
  getPerimeter() {
    return 4 * this._side;
  }
}

// Example usage:
let rectangle = new Rectangle(5, 10);
console.log(rectangle.width);   // Output: 5
console.log(rectangle.height);  // Output: 10
console.log(rectangle.getArea()); // Output: 50

let square = new Square(5);
console.log(square.width);      // Output: 5
console.log(square.height);     // Output: 5 (since width and height are the same for a square)
console.log(square.getArea());  // Output: 25
console.log(square.getPerimeter()); // Output: 20 (4 * 5)
