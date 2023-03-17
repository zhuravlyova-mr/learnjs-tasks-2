//Можно, если не переопределить прототип по умолчанию:
function Fox(color) {
    this.color = color;
}

let obj = new Fox('Red'); 
let obj2 = new obj.constructor('Black');

console.log(obj2.color);

//Нельзя, если переопределить прототип по умолчанию таким образом,
//что в нем не будет правильного свойства 'конструктор'
function OtherFox(color) {
    this.color = color;
}

OtherFox.prototype = {tailLength : 'long'};
let objOther = new OtherFox('Red');
let obj2Other = new objOther.constructor('Black');

console.log(obj2Other.color);

