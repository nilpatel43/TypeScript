// Object in TypeScript

// Object में अलग-अलग प्रकार की Properties रख सकते हैं।

const chai = {
    name: "Masala chai",
    price: 10,
    isHot: true,
}

// यहाँ Object की सभी Properties के Type बताए गए हैं।
/*
{
    name: string;
    price: number;
    isHot: boolean;
}
*/


// Declare object type

// इसमें पहले Object का Type बताते हैं।

let tea: {
    name: string;
    price: number;
    isHot: boolean;
}

tea = {
    name: "Ginger Tea",
    price: 12,
    isHot: true,
}


// Alias object type

// इसमें Object के Type को एक नाम दिया जाता है।

type Tea = {
    name: string;
    price: number;
    ingredients: string[];
}

const adrakChai: Tea = {
    name: "Adrak Chai",
    price: 15,
    ingredients: ["water", "tea leaves", "ginger"],
}


// Duck Typing

// इसमें जरूरत की Properties मिलनी चाहिए, अतिरिक्त Properties भी हो सकती हैं।

type Cup = {size: string}
let smallCup: Cup = {size: "200ml"}

let bigCup = {size: "500ml", material: "steel"} 
// अतिरिक्त Property होने पर भी Error नहीं आता।

smallCup = bigCup


type Brew = {brewTime: number}
const coffee = {brewTime: 5, beans: "Arabica"}
const cbaiBrew: Brew = coffee


type User = {
    username: string,
    password: string
}

const u: User = {
    username: "chaiLover",
    password: "123", 
// Password नहीं देने पर Error आएगा।
}


// Split Properties

// बड़े Object को छोटे-छोटे Types में बाँटा जाता है।

type Item = {name: string, quantity: number}
type Address = {street: string, pin: number}

type Order = {
    id: string,
    item: Item[],
    address: Address
}


// Partial Type

// इसमें सभी Properties Optional हो जाती हैं।

type Chai = {
    name: string,
    price: number,
    isHot: boolean
}

const updateChai = (update: Partial<Chai>) => {
    // दी गई Properties को Update किया जाता है।
    console.log("updating chai with", update);
}

updateChai({price: 12})  // सही है।
updateChai({isHot: false})  // सही है।


// Required Type

// इसमें सभी Optional Properties जरूरी हो जाती हैं।

type ChaiOrder = {
    name?: string,
    quantity?: number,
} 

const placeOrder = (order: Required<ChaiOrder>) => {
    // यहाँ सभी Properties देना जरूरी है।
    console.log(order);
}

placeOrder({
    name: "Masala chai",
    quantity: 2
})  

// एक भी Property नहीं देने पर Error आएगा।


// Pick Type

// इसमें जरूरत की Properties को चुना जाता है।

type Drink = {
    name: string;
    price: number;
    isHot: boolean;
    ingredients: string[]
}

type BasicDrinkInfo = Pick<Drink, "name" | "price">

const drinkInfo: BasicDrinkInfo = {
    name: "Lemon Tea",
    price: 30
}


// Omit Type

// इसमें चुनी हुई Properties को हटा दिया जाता है।

type DrinkNew = {
    name: string;
    price: number;
    isHot: boolean;
    secretIngredients: string
};

type PublicDrink = Omit<DrinkNew, "secretIngredients">;