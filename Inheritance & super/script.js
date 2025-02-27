/// Inheritance

class Anime{
    constructor(name){
        console.log(`Hi, ${name} I am Constructor from Anime class`)
    }

    display_name(){
        console.log(` Hi, this is display_name() 
            from Anime class`);
    }
}

class Naruto extends Anime{
    constructor(name){
        super(name); // super() to call constructor from inherited class
        console.log("hi i am naruto")
    }

    display_name(){
        console.log(` Hi, this is display_name() from naruto class`);
    }
}


class OnePiece extends Anime{
    constructor(){
        super();
        console.log("hi i am Luffy")
    }

}


const anime = new Anime;
anime.display_name();
console.log("/////////////////////////");

const naruto = new Naruto("naruto");
naruto.display_name()
console.log("/////////////////////////");

const onepiece = new OnePiece;
