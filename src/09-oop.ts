// OOP in TypeScript

//  OOP => Object Oriented Programming

// OOP में Class और Object की मदद से Code को व्यवस्थित किया जाता है।

// Class Chai {
//     flavour: string;
//     price: number

//     constructor(flavour: string, price:number){
//         this.flavour = flavour
//         this.price = price
//     }
//     // constructor(flavour: string){
//     //     this.flavour = flavour
//     // }
// }

// const masalaChai = new Chai("Ginger", 20)
// masalaChai.flavour = "masala"


// Access Modifier

// इनका उपयोग Class की Properties को सुरक्षित रखने के लिए किया जाता है।

class Chai {
    public flavor: string = "Masala"

    // Public को Class के बाहर भी उपयोग कर सकते हैं।
    private secretIngredients = "Cardamom"

    reveal(){
        return this.secretIngredients  // सही है।
    }
}
const c = new Chai()


// Protected Modifier

// Protected Property को अपनी Class और उसकी Child Class में उपयोग कर सकते हैं।

class Shop {
    protected shopName = "Chai corner"
}

class Branch extends Shop {
    getName(){
        return this.shopName // सही है।
    }
}
new Branch()


// Private Field

// # लगाने से Property केवल उसी Class के अंदर उपयोग कर सकते हैं।

class Walet {
    #balance = 100

    getBalance(){
        return this.#balance
    }
}
const w = new Walet()


// Read Only Property

// Readonly Property की Value केवल एक बार तय कर सकते हैं।

class Cup {
    readonly capacity: number = 250

    constructor(capacity:number){
        this.capacity = capacity
    }
}


// Getter and Setter

// Getter से Value प्राप्त करते हैं और Setter से Value बदलते हैं।

class ModernChai {
    private _sugar = 2

    // Getter Value वापस देता है।
    get sugar(){
        return this._sugar
    }

    // Setter नई Value सेट करता है।
    set sugar(value: number){
        // अगर चीनी 5 से ज्यादा होगी तो Error आएगा।
        if (value > 5) throw new Error("Too Sweet");
        this._sugar = value
    }
}
const d = new ModernChai()
d.sugar = 3


// Static in TypeScript

// Static Property को Object बनाए बिना Class के नाम से उपयोग कर सकते हैं।

class EkChai {
    static shopName = "Chaicode caffe"

    constructor(public flavour: string){}
}
console.log(EkChai.shopName);


// Abstract Class

// Abstract Class का Object नहीं बना सकते।
// इसकी मदद से दूसरी Class में जरूरी Methods बनाए जाते हैं।

abstract class Drink {
    abstract make(): void
}

// Child Class में Abstract Method को पूरा करना जरूरी है।
class MyChai extends Drink{
    make(){
        console.log("Brewing chai");   
    }
}


// Dependency Injection

// एक Class को दूसरी Class की जरूरत हो तो उसका Object बाहर से दिया जा सकता है।

class Heater {
    heat(){}
}

class ChaiMaker {
    constructor(private heater: Heater){}

    make(){
        this.heater.heat
    }
}