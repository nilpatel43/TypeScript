// Unions Types

// इसमें एक Variable में एक से ज्यादा Type रख सकते हैं।

let subs: number | string = '1M'

let apiRequestStatus: 'success' | 'failure' | 'pending' = 'success'
apiRequestStatus = 'failure'

// apiRequestStatus = 'done' 
// compiler error: Type '"done"' is not assignable to type '"success" | "failure" | "pending"'.

let airlineSeat: 'aisle' | 'window' | 'middle' = 'aisle'
airlineSeat = 'window'


// Any Type

// इसमें किसी भी प्रकार की Value रख सकते हैं।

const orders = ["12", "15", "20", "25", "30"]

let currentorder: string | undefined;

// यहाँ Loop की मदद से Order खोजा जा रहा है।
for (let order of orders) {
    if (order === "20") {
        currentorder = order
        break;
    }
    currentorder = "11"
}

// यहाँ Result Print होगा।
console.log(currentorder);