const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require('./lib/shapes');

const questions = [
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like to draw?',
        choices: ['Circle', 'Square', 'Triangle']
    },

    {
        type: 'input',
        name: 'shapeColor',  
        message: 'What color would you like to color your logo?',
        default: 'red'
    },
    {
        type: 'input',
        name: 'text',   
        message: 'What text would you like to add to your logo?',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color would you like your text to be?',
        default: 'white'
    },
]

class SVG {
    constructor() {
        this.textEl = '';
        this.shapeEl = '';
    }
    render() {
        return `<svg version="1.1" xmlns="https://www.w3.org/TR/SVG2/" width="300" height="250">${this.shapeEl}${this.textEl}</svg>`
    }
    createText(text, color) {
        if (text.length > 3 && text.length < 1) {
            throw new Error('Text must be between 1 and 3 characters long')
        }
        this.textEl  = `<text x="150" y="125" font-size="50" text-anchor="middle" fill="${color}">${text}</text>`
    }
    createShape(shape) {
        this.shapeEl = shape.render();
    }

 }

 function init() {
    inquirer.prompt(questions).then((data) => {
        const svg = new SVG();
        const logoText = data.text;
        //generates logo shape
        let newShape = '';
        if (data.shape === 'Circle') {
            newShape = new Circle();
        } else if (data.shape === 'Square') {
            newShape = new Square();
        } else if (data.shape === 'Triangle') {
            newShape = new Triangle();
        } else {
            console.log('Please select a shape');
        }

        //creates logo color
        newShape.setColor(data['shapeColor']);

        svg.createText(logoText, data['textColor']);
        svg.createShape(newShape);
        fs.writeFileSync(`$(data.shape).svg`, svg.render());
    })

 }

    init();
