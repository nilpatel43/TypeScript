
//  Unions Types

let subs: number | string = '1M'

let apiRequestStatus: 'success' | 'failure' | 'pending' = 'success'
apiRequestStatus = 'failure'

// apiRequestStatus = 'done' 
// compiler error: Type '"done"' is not assignable to type '"success" | "failure" | "pending"'.

let airlineSeat: 'aisle' | 'window' | 'middle' = 'aisle'
airlineSeat = 'window'


//  Any Type

const orders = ["12", "15", "20", "25", "30"]

let currentorder: string | undefined;

for (let order of orders) {
    if (order === "20") {
        currentorder = order
        break;
    }
    currentorder = "11"
}

console.log(currentorder);
