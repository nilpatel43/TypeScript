
//  Array in TypeScript

const chaiFlavours: string[] = ["Masala", "Adrak"]
const chaiPrice: number[] = [10, 20]

const rating: Array<number> = [4.5, 5.0]

type Chai = {
    name: string;
    price: number
}

const menu: Chai[] = [
    {name: "Masala", price: 25},
    {name: "Adrak", price: 15},
]


//  Read Only Array

const cities: readonly string[] = ["Dilhi", "Jaipur"]
// cities.push("Pune")


const table: number[] [] = [
    [1, 2, 3],
    [4, 5, 6]
]


//  Tuples in TypeScript

let chaiTuple: [string, number];
chaiTuple = ["Masala", 20]
//  chaiTuple = [20, "Masala"] // 


let userInfo: [string, number, boolean?]
userInfo = ["nil", 100]
userInfo = ["nil", 100, true]


//  Read Only Tuple

const location: readonly [number, number] = [28.23, 32.22]

// Name Tuple
const chaiItems: [name: string, price: number] = ["Masala", 25]


//  Enum in TypeScript

enum CupSize {
    SMALL,
    MEDIUM,
    LARGE
}

const size = CupSize.LARGE


enum Status {
    PENDING = 100,
    SERVED, // 101
    CANCELLED // 102
}


enum ChaiType {
    MASALA = "masala",
    GINGER = "ginger"
}
function makaChai(type: ChaiType){
    console.log(`Making: ${type}`);
}

makaChai(ChaiType.GINGER)
// makaChai("masala")


//  Hitrojenes Value

enum RandomEnum {
    ID = 1,
    NAME = "chai"
}


const enum Sugars {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}

let t: [string, number] = ["chai", 10]
t.push("extra")