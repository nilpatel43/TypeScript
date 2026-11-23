
//  OOP in TypeScript

// class Chai {
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


//  Access Modify

class Chai {
    public flavor: string = "Masala"

    private secretIngredients = "Cardamom"

    reveal(){
        return this.secretIngredients  // ok
    }
}
const c = new Chai()


class Shop {
    protected shopName = "Chai corner"
}

class Branch extends Shop {
    getName(){
        return this.shopName // ok
    }
}
new Branch()


class Walet {
    #balance = 100

    getBalance(){
        return this.#balance
    }
}
const w = new Walet()


//  Read Only Property

class Cup {
    readonly capacity: number = 250

    constructor(capacity:number){
        this.capacity = capacity
    }
}


//  Getter and Setter

class ModernChai {
    private _sugar = 2

    get sugar(){
        return this._sugar
    }
    set sugar(value: number){
        if (value > 5) throw new Error("Too Sweet");
        this._sugar = value
    }
}
const d = new ModernChai()
d.sugar = 3


//  Static in TypeScript

class EkChai {
    static shopName = "Chaicode caffe"

    constructor(public flavour: string){}
}
console.log(EkChai.shopName);


abstract class Drink {
    abstract make(): void
}
class MyChai extends Drink{
    make(){
        console.log("Brewing chai");   
    }
}


class Heater {
    heat(){}
}
class ChaiMaker {
    constructor(private heater: Heater){}

    make(){
        this.heater.heat
    }
}
