// Types

// Type की मदद से हम अपना खुद का Data Structure बना सकते हैं।

type chaiOrder = {
    type: string;
    sugar: number;
    strong: boolean;
}

// यहाँ chaiOrder Type का Data लिया जाता है।
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

// Implements की मदद से Class में Type की सभी Properties देनी पड़ती हैं।
class MasalaChai implements TeaRecipe {
    water = 100;
    milk = 50;
}



// Interfaces

// Interface Object की Structure और Properties बताता है।

interface CupSize {
    size: "small" | "large";
}

class Chai implements CupSize {
    size: "small" | "large" = "large";
}


// Class Union Type को सीधे Implement नहीं कर सकती।
 // type Response = {ok: true} | {ok: false}
 // class myRes implements Response { 
 //     ok: boolean = true;
 // } 
   // Error: Class 'myRes' incorrectly implements interface 'Response'.



// Literal Types

// इसमें केवल दी गई Values का ही उपयोग कर सकते हैं।

type TeaType = "masala" | "ginger" | "lemon";

function orderChai(t: TeaType) {
    console.log(t);
}



// Intersection Types

// इसमें दो या दो से ज्यादा Types को मिलाया जाता है।

type BaseChai = {teaLeaves: number}
type Extra = {masala: number}

type ChaiMasala = BaseChai & Extra

const cup : ChaiMasala = {
    teaLeaves: 5,
    masala: 2
}



// Optional Properties

// इसमें Property देना जरूरी नहीं होता।

type User = {
    username: string
    bio?: string
}

const u1: User = {username: "Nil"}
const u2: User = {username: "Nil", bio: "nil.ai"}



// Readonly Properties

// इसमें Property की Value बदल नहीं सकते।

type Config = {
    readonly appName: string
    version: number
}

const cfg: Config = {
    appName: "Master", 
    version: 1
}

// cfg.appName = "ChaiCode" 
// Error: Readonly Property की Value नहीं बदल सकते।