//  Fetch Request in TypeScript

// Fetch API का उपयोग करके Server से Data प्राप्त करते हैं और TypeScript में उसका Type Define करते हैं।


// API Data का Structure Define करता है।
interface Todo { 
    userID: number;
    id: number;
    title: string;
    completed: boolean
}

// API Data Fetch करने के लिए Async Function
const fetchData = async () => { 
    try {
        // Server पर GET Request भेजता है।
        const response = await fetch( 
            "https://jsonplaceholder.typicode.com/todos/1"
        );

        // Response सफल है या नहीं Check करता है।
        if(!response.ok) { 
            throw new Error(`HTTP error ${response.status}`)
        }

        // JSON Data को Todo Type में प्राप्त करता है।
        const data: Todo = await response.json() 

      // API में आने वाली Error को Handle करता है।
    } catch (error: any) { 
        
    }
}
