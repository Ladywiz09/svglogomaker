//import from shapes.js
const {Triangle, Square, Circle} = require('./shapes');


describe('Triangle', () => {
    test('should return a triangle svg element', () => {
        const shape = new Triangle();
        var color = ('blue');
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon points="0, 180 300, 180, 100, 0" fill="${color}">`)
    })
})

describe('Square', () => {
    test('should return a square svg element', () => {
    const shape = new Square();
    var color = ('yellow');
    shape.setColor(color);
    expect(shape.render()).toEqual(`<rect x="50" fill="${color}">`)
    
    })
})

describe('Circle', () => {
    test('should return a circle svg element', () => {
        const shape = new Circle();
        var color = ('green');
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" fill="${color}>`)
    })
})

