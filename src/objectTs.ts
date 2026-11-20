
//  Object in TypeScript

const chai = {
    name: "Masala chai",
    price: 10,
    isHot: true,
}

// {
//     name: string;
//     price: number;
//     isHot: boolean;
// }


//  Declare object type

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


//  Alias object type

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


//  duck typing

type Cup = {size: string}
let smallCup: Cup = {size: "200ml"}

let bigCup = {size: "500ml", material: "steel"} 
//  duck typing, extra property is allowed

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
// Jo password no rakhi to error: Property 'password' is missing in type '{ username: string; }' but required in type 'User'.
}


//  Split Properties

type Item = {name: string, quantity: number}
type Address = {street: string, pin: number}

type Order = {
    id: string,
    item: Item[],
    address: Address
}


//  Partial Type

type Chai = {
    name: string,
    price: number,
    isHot: boolean
}

const updateChai = (update: Partial<Chai>) => {
    // updatechai object with the provided properties
    console.log("updating chai with", update);
}

updateChai({price: 12})  // valid
updateChai({isHot: false})  // valid


//  Required Type

type ChaiOrder = {
    name?: string,
    quantity?: number,
} 
const placeOrder = (order: Required<ChaiOrder>) => {
    // placeorder with the provided properties
    console.log(order);
}

placeOrder({
    name: "Masala chai",
    quantity: 2
})  
// Jo ek j Property lakhsi to error: Property 'quantity' is missing in type '{ name: string; }' but required in type 'Required<ChaiOrder>'.


//  Pick Type

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


//  Omit Type

type DrinkNew = {
    name: string;
    price: number;
    isHot: boolean;
    secretIngredients: string
};

type PublicDrink = Omit<Drink, "secretIngredients">;
