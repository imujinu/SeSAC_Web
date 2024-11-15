class Shape{
    constructor(width,height){
        this.width = width;
        this.height = height ; 
    }

    getArea(){
       return this.width * this.height
}}

let rec1 = new Shape(3,4);
console.log(rec1.getArea())

class Rectangle extends Shape {
    constructor(width,height){
        super(width,height)}

    getSqrt(){
        return Math.floor(Math.sqrt(this.width)+Math.sqrt(this.height))
    }
}

let rec3 = new Rectangle(5,6)
console.log(rec3.getArea())

let rec2 = new Rectangle(9,8)
console.log(rec2.getSqrt())





class Triangle extends Shape {
    constructor(width,height){
        super(width,height)
    }

    getArea(){
        return (this.width*this.height)/2
    }
}

let Tr = new Triangle(12,12)
console.log(Tr.getArea())

class Circle extends Shape {
    constructor(width,height,radius){
        super(width,height)
        this.radius = radius;
    }

    getArea(){
        return Math.floor(this.radius**2*Math.PI)
    }
}

let circle = new Circle (0,0,4)
console.log(circle.getArea())