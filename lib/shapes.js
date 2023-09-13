class Shape{
    constructor(color){
        this.color = color;
    }
    setColor(color){
        this.color = color;
    }
};

class Triangle extends Shape{
    render(){
        return `<polygon points="150,25 200,175 100,175" fill="${this.color}" />`;
    };
};

class Square extends Shape{
    render(){
        return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
    };
};

class Circle extends Shape{
    render(){
        return `<circle cx="150" cy="150" r="100" fill="${this.color}" />`;
    };
};


module.exports = {Triangle, Square, Circle};
    