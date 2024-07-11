// In main.html or your JavaScript file
class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  // Other methods like getArea()
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
    this._side = side;
  }

  // Method specific to Square like getPerimeter()
}

// Export classes if needed
window.Rectangle = Rectangle;
window.Square = Square;
