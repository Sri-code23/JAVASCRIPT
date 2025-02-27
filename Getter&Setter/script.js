// Getters & Setters in Javascript


// class DataBase{
//     constructor(id, name, age){
//         this.id = id;
//         this.name = name;
//         this.age = age;
//     }
// }

// const student1 = new DataBase(1,"sridhar",23);

// console.log(student1.id);
// console.log(student1.name);
// console.log(student1.age);

// this will look good until we send the correct input value and type, 
// but what if we send some different inputs of different dattypes
// example like 

// const student2 = new DataBase("madara","hih", -4524574);

// console.log(student2.id);
// console.log(student2.name);
// console.log(student2.age);

// its still going to use that invalid input as value without validating the inputs
// To validate the input given to a class, we use set method 
// and to read the data from the class, we use get method


class DataBase{
    constructor(id, name, age){
        this.id = id;
        this.name = name;
        this.age = age;
    }
    // this set method is used to validate the id number that is 
    // passed as a parameter to the class
    set id(new_id){
        if ((new_id > 0) && (typeof new_id == "number")){
            this._id = new_id;
        }
        else{
            console.error("the id must be a positive number");
        }
    }
    
    // this get method helps the user to read the parameter 
    get id(){
        return `roll-No: ${this._id}`;
    }



    // this set method is used to validate the id number that is 
    // passed as a parameter to the class
    set name(new_name){
        if (typeof new_name == "string"){
            this._name = new_name;
        }
        else{
            console.error("the id must be a positive number");
        }
    }
    
    // this get method helps the user to read the parameter 
    get name(){
        return `student name : ${this._name}`;
    }



    // this set method is used to validate the id number that is 
    // passed as a parameter to the class
    set age(new_age){
        if ((new_age > 0) && (typeof new_age == "number")){
            this._age = new_age;
        }
        else{
            console.error("the id must be a positive number");
        }
    }
    
    // this get method helps the user to read the parameter 
    get age(){
        return `age : ${this._age}`;
    }
}

const student1 = new DataBase(2,"sridhar",23);

console.log(student1.id);
console.log(student1.name);
console.log(student1.age);


// while setting invalid parameters we will get error message 

const student2 = new DataBase(-66,70967,"hghg");

// while getting invalid parameters we will get error message (undefined)
console.log(student2.id);
console.log(student2.name);
console.log(student2.age);



