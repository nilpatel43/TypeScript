
//  Types

type chaiOrder = {
    type: string;
    sugar: number;
    strong: boolean;
}

function makeChai(order: chaiOrder) {
    console.log(order);
}

function serveChai(order: chaiOrder) {
    console.log(order);
}


type TeaRecipe = {
    water: number;
    milk: number;
}

class MasalaChai implements TeaRecipe {
    water = 100;
    milk = 50;
}


//  Interfaces

interface CupSize {
    size: "small" | "large";
}

class Chai implements CupSize {
    size: "small" | "large" = "large";
}


// type Response = {ok: true} | {ok: false}
// class myRes implements Response { 
//     ok: boolean = true;
// } 
  //  error: Class 'myRes' incorrectly implements interface 'Response'.


//  literal types

type TeaType = "masala" | "ginger" | "lemon";

function orderChai(t: TeaType) {
    console.log(t);
}


//  Intersection Types

type BaseChai = {teaLeaves: number}
type Extra = {masala: number}

type ChaiMasala = BaseChai & Extra

const cup : ChaiMasala = {
    teaLeaves: 5,
    masala: 2
}


//  Optional Properties

type User = {
    username: string
    bio?: string
}

const u1: User = {username: "Nil"}
const u2: User = {username: "Nil", bio: "nil.ai"}
    

//  Readonly Properties

type Config = {
    readonly appName: string
    version: number
}

const cfg: Config = {
    appName: "Master", 
    version: 1
}

// cfg.appName = "ChaiCode" 
//  error: Cannot assign to 'appName' because it is a read-only property.