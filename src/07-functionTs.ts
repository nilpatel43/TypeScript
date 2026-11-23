// Function in TypeScript

// Function में Parameters और Return Value का Type बता सकते हैं।

function makeChai(type: string, cups: number) {
    // यहाँ type String और cups Number होना चाहिए।
    console.log(`Making ${cups} cups of ${type}`);
}

// Function को Value देकर Call किया गया है।
makeChai("Masala", 2)


// Return Type

// यहाँ बताया गया है कि Function Number Value Return करेगा।

function getChaiPrice(): number {
    return 25
}


// Null Return

// अगर Order खाली है तो Function Null Return करेगा।

function makeOrder(order: string){
    if (!order) return null
    return order
}


// Void Type

// Void का मतलब है कि Function कोई Value Return नहीं करता।

function logChai(): void {
    console.log("Chai is ready");
}


// Optional Parameters

// ? लगाने से Parameter देना जरूरी नहीं होता।

// function orderChai(type?: string){

// }


// Default Parameters

// अगर Value नहीं देंगे तो Default Value का उपयोग होगा।

function orderChai(type: string = "Masala"){
    
}


// Object as Parameter

// Function में Object भेजते समय उसकी Properties और उनके Types बता सकते हैं।

function createChai(order: {
    type: string;
    sugar: number;
    size: "small" | "large"
}) {
    return 4
}