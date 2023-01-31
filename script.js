
'use strict'

document.write('<h1>Objects Assignment</h1>');

const frog ={
    species: 'goliath frog',
    color: 'green',
    size: 'big',
    diet: 'lizzards',
    leap: function(){
        return("My pet is a " + this.species + ". They eat " + this.diet + ". They're usually " + this.size + " and " + this.color + ".");
    }
};
console.log(frog);
console.log(frog.leap());

Phone.prototype.case = 'clear';
Phone.prototype.string = function(){
    return ("My family uses " +this.brand+". I have a " +this.model+". The color of my phone is "+this.color+". The price for my phone ranges from "+this.cost+".");
}
    function Phone (brand, model, color, cost){
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.cost = cost;
}

const oldPhone = new Phone ("iPhone", "iPhone XR", "white", "$300 - $490");
const newPhone = new Phone ("iPhone", "iPhone 14", "navy", "$800 - $1,100");
const addsPhone = new Phone ("Google", "Google Pixle 7", "light green", "$600-$1,100");

console.log(oldPhone);
console.log(newPhone);
console.log(addsPhone);
console.log(newPhone, Phone.prototype);
document.write('<h3>', newPhone.string(),'</h3>');

