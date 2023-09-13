const inquirer = require('inquirer');
const fs = require('fs');

const {Triangle, Square, Circle} = require('./lib/shapes');

//An array of questions for user input
const questions = [
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like to draw?',
        choices: ['Triangle', 'Square', 'Circle'],
    },

    {
        type: 'input',
        name: 'shapeColor',  
        message: 'What color would you like to color your logo?',
        
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
        
    },
]

class SVG {
    constructor() {
        this.textEl = '';
        this.shapeEl = '';
    }
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="250">${this.shapeEl}${this.textEl}</svg>`
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
        if (data.shape === 'Triangle') {
            newShape = new Triangle();
        } else if (data.shape === 'Square') {
            newShape = new Square();
        } else if (data.shape === 'Circle') {
            newShape = new Circle();
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
