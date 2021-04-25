class Ball {
    constructor(x, y, width) {
      var options = { 
        density: 1, 
        frictionAir: 0.005};
  
      this.body = Bodies.circle(x, y, width, options);
      this.width = width;
      //this.height = height;
      World.add(world, this.body);
    }
  
    display() {
      
      //push();
      //translate(this.body.position.x, this.body.position.y);
      ellipseMode(RADIUS)
      ellipse(this.body.position.x, this.body.position.y, this.width, this.width);
      //pop();
    }
  }
