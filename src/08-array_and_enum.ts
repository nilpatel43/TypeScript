// Array in TypeScript

// Array में एक ही प्रकार की कई Values रख सकते हैं।

const chaiFlavours: string[] = ["Masala", "Adrak"]
const chaiPrice: number[] = [10, 20]

// इस तरीके से भी Array का Type बता सकते हैं।
const rating: Array<number> = [4.5, 5.0]


type Chai = {
    name: string;
    price: number
}

// यहाँ Chai Type के अनुसार Array बनाया गया है।
const menu: Chai[] = [
    {name: "Masala", price: 25},
    {name: "Adrak", price: 15},
]


// Read Only Array

// इस Array की Values को बदल नहीं सकते।

const cities: readonly string[] = ["Dilhi", "Jaipur"]
// cities.push("Pune")


// इसमें Array के अंदर दूसरा Array रखा जाता है।
const table: number[] [] = [
    [1, 2, 3],
    [4, 5, 6]
]


// Tuples in TypeScript

// Tuple में हर Value का Type और उसकी जगह पहले से तय होती है।

let chaiTuple: [string, number];
chaiTuple = ["Masala", 20]
// chaiTuple = [20, "Masala"] // गलत क्रम होने पर Error आएगा।


let userInfo: [string, number, boolean?]
userInfo = ["nil", 100]
userInfo = ["nil", 100, true]


// Read Only Tuple

// इसमें Tuple की Values को बदल नहीं सकते।

const location: readonly [number, number] = [28.23, 32.22]


// Name Tuple

// इसमें Tuple की Values को नाम भी दे सकते हैं।

const chaiItems: [name: string, price: number] = ["Masala", 25]


// Enum in TypeScript

// Enum में कई निश्चित Values को एक नाम के अंदर रखा जाता है।

enum CupSize {
    SMALL,
    MEDIUM,
    LARGE
}

const size = CupSize.LARGE


// यहाँ पहली Value 100 है, बाकी Values अपने आप बढ़ती हैं।
enum Status {
    PENDING = 100,
    SERVED, // 101
    CANCELLED // 102
}


// यहाँ Enum में String Values रखी गई हैं।
enum ChaiType {
    MASALA = "masala",
    GINGER = "ginger"
}

function makaChai(type: ChaiType){
    console.log(`Making: ${type}`);
}

makaChai(ChaiType.GINGER)
// makaChai("masala")


// Heterogeneous Value

// इसमें Number और String दोनों प्रकार की Values रख सकते हैं।

enum RandomEnum {
    ID = 1,
    NAME = "chai"
}


// Const Enum

// इसमें निश्चित Values रखी जाती हैं और उपयोग के समय उनका सीधा उपयोग होता है।

const enum Sugars {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}


// Array जैसे Tuple में भी Push का उपयोग कर सकते हैं।
let t: [string, number] = ["chai", 10]
t.push("extra")