
//  Interface in TypeScript

interface Chai {
    flavor: string
    price: number
    milk?:boolean
}

const masala:Chai = {
    flavor: "masala",
    price: 20,
}


// Read Only

interface Shop {
    readonly id: number
    name: string
}
const s: Shop = {id: 1, name: "Chaicode caffe"}
// s.id = 2


interface DiscountCalulator {
    (price: number): number
}
const apply50: DiscountCalulator = (p) => p *0.5


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


//  Index Signature 

interface ChaiRatings {
    [flavor: string]: number
}
const ratings: ChaiRatings = {
    masala: 4.5,
    ginger: 4.5,
}


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


interface A {a: string}
interface B {b: string}

interface C extends A, B {}



//  Generics in TypeScript

function wrapInArray<T>(item: T): T[] {
    return [item]
}

wrapInArray("masala")
wrapInArray(43)
wrapInArray({flavor: "Ginger"})


function pair<A, B>(a: A, b: B): [A, B] {
    return [a, b]
}

pair("masala", 20)
pair("masala", {flavor: "Ginger"})


//  Generic Interface

interface Box<T> {
    content: T
}

const numberBox: Box<number> = {content: 10}
const numberBoxCup: Box<string> = {content: "10"}


interface ApiPromise<T> {
    status: number,
    data: T
}

const res: ApiPromise<{flavor: string}> = {
    status: 200,
    data: {flavor: "masala"}
}
