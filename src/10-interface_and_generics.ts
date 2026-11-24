// Interface in TypeScript

// Interface का उपयोग Object की बनावट और उसमें कौन-सी Properties होंगी, यह तय करने के लिए किया जाता है।

interface Chai {
    flavor: string
    price: number
    milk?:boolean
}

// यहाँ Interface के अनुसार Chai का Object बनाया गया है।
const masala:Chai = {
    flavor: "masala",
    price: 20,
}


// Read Only

// Readonly लगाने से Property की Value बदल नहीं सकते।

interface Shop {
    readonly id: number
    name: string
}

const s: Shop = {id: 1, name: "Chaicode caffe"}
// s.id = 2


// Function Interface

// इसमें Function के Parameter और Return Value का Type तय किया जाता है।

interface DiscountCalulator {
    (price: number): number
}

const apply50: DiscountCalulator = (p) => p *0.5


// Method Interface

// इसमें Object के अंदर कौन-कौन से Methods होंगे, यह तय किया जाता है।

interface TeaMachine {
    start(): void
    stop(): void
}

const machine: TeaMachine = {
    start(){
        console.log("Start");
    },
    stop(){
        console.log("Stop");
    }
}


// Index Signature

// इसमें Object के अंदर कितनी भी Properties रख सकते हैं,
// लेकिन सभी की Value का Type एक जैसा होना चाहिए।

interface ChaiRatings {
    [flavor: string]: number
}

const ratings: ChaiRatings = {
    masala: 4.5,
    ginger: 4.5,
}


// Declaration Merging

// एक ही नाम के दो Interface अपने आप जुड़ जाते हैं।

interface User {
    name: string
}

interface User {
    age: number
}

const u: User = {
    name: "Nil",
    age: 22
}


// Interface Inheritance

// Extends की मदद से एक Interface दूसरे Interface की Properties ले सकता है।

interface A {a: string}
interface B {b: string}

interface C extends A, B {}



// Generics in TypeScript

// Generics की मदद से एक ही Function को अलग-अलग Types के साथ उपयोग कर सकते हैं।

function wrapInArray<T>(item: T): T[] {
    return [item]
}

wrapInArray("masala")
wrapInArray(43)
wrapInArray({flavor: "Ginger"})


// Multiple Generics

// इसमें एक Function में एक से ज्यादा Generic Types ले सकते हैं।

function pair<A, B>(a: A, b: B): [A, B] {
    return [a, b]
}

pair("masala", 20)
pair("masala", {flavor: "Ginger"})


// Generic Interface

// इसमें Interface को Generic बनाकर अलग-अलग Types के साथ उपयोग कर सकते हैं।

interface Box<T> {
    content: T
}

const numberBox: Box<number> = {content: 10}
const numberBoxCup: Box<string> = {content: "10"}


// Generic API Interface

// इसमें API से मिलने वाले Data का Type तय कर सकते हैं।

interface ApiPromise<T> {
    status: number,
    data: T
}

const res: ApiPromise<{flavor: string}> = {
    status: 200,
    data: {flavor: "masala"}
}