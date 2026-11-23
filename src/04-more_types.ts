// Type Assertion

// इसमें हम TypeScript को बताते हैं कि किसी Value का Type क्या है।

let response: any = "23";

// यहाँ response को String मानकर उसकी Length निकाली गई है।
let numbericLength: number = (response as string).length;


type Book = {
    name: string;
}

// JSON String को Book Object में बदला गया है।
let bookString = '{"name":"who moved my cheese"}';
let bookObject= JSON.parse(bookString) as Book;

console.log(bookObject);


// यहाँ HTML Element को Input Element माना गया है।
const inputElement = document.getElementById("username") as HTMLInputElement;



// Type Unknown or Any

// Any में बिना Check किए किसी भी Value का उपयोग कर सकते हैं।
// Unknown में उपयोग करने से पहले Type Check करना जरूरी है।

let value: any

value = "chai"
value = [1, 2, 3]
value = 2.5
value.toUpperCase()  // इसमें कोई Error नहीं आएगा।


let newValue: unknown

newValue = "chai"
newValue = [1, 2, 3]
newValue = 2.5

// Type Check किए बिना इसका उपयोग नहीं कर सकते।
 // newValue.toUpperCase()  // Error!

if (typeof newValue === "string") {
    newValue.toUpperCase()  // अब कोई Error नहीं आएगा।
}


try {
    
} catch (error) {
    // यहाँ Check किया जाता है कि Error का Type क्या है।
    if (error instanceof Error) {
        console.log(error.message);
    }
    console.log("Error", error);
}


const data: unknown = "chai aur code"

// यहाँ Unknown को String में बदला गया है।
const strData: string = data as string



// Type Never

// Never का मतलब है कि ऐसी Value जो कभी हो ही नहीं सकती।

type Role = "admin" | "user" | "superadmin"

function redirect(role: Role): void {
    if (role === "admin") {
        console.log("Redirect to admin dashboard");
        return
    }

    if (role === "user") {
        console.log("Redirect to user dashboard");
        return
    }

    // यहाँ केवल superadmin बचता है।
    role; 

    // Error: यहाँ Role का Type Never होना चाहिए।
    // क्योंकि बाकी दोनों Types पहले ही Check हो चुके हैं।
}


function neverReturns(): never {
    // यह Loop कभी खत्म नहीं होगा।
    while (true) {}
}