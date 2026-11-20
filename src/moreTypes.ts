
//  Type Assertion

let response: any = "23";

let numbericLength: number = (response as string).length;

type Book = {
    name: string;
}

let bookString = '{"name":"who moved my cheese"}';
let bookObject= JSON.parse(bookString) as Book;

console.log(bookObject);


const inputElement = document.getElementById("username") as HTMLInputElement;


//  Type Unknown or Any

let value: any

value = "chai"
value = [1, 2, 3]
value = 2.5
value.toUpperCase()  // no error


let newValue: unknown

newValue = "chai"
newValue = [1, 2, 3]
newValue = 2.5
// newValue.toUpperCase()  // error!
if (typeof newValue === "string") {
    newValue.toUpperCase()  // no error
}


try {
    
} catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
    console.log("Error", error);
}


const data: unknown = "chai aur code"
const strData: string = data as string


//  Type Never

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
    role; 
    //  error: Type '"admin" | "user"' is not assignable to type 'never'.
    //  error: Type '"superadmin"' is not assignable to type 'never'.
}


function neverReturns(): never {
    while (true) {}
}
