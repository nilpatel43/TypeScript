//  Axios in TypeScript

// Axios का उपयोग API से Data Fetch करने और HTTP Requests Handle करने के लिए किया जाता है।

import axios from "axios";
import type { AxiosResponse } from "axios";


// axios.get('https://example.com/data')
// .then(response => {
//     console.log(response.data);
// })


// API Data का Structure Define करता है।
interface Todo { 
    userID: number;
    id: number;
    title: string;
    completed: boolean
}

// API से Data Fetch करने के लिए Async Function
const fetchData = async () => { 
    try {
        // API Call करके Typed Response प्राप्त करता है।
        const response: AxiosResponse<Todo> = await axios.get("https://jsonplaceholder.typicode.com/todos/1"); 
        console.log("Todo", response.data);
    } catch (error: any) {
        // Check करता है कि Error Axios का है या नहीं।
        if(axios.isAxiosError(error)) {
            console.log("Axios Error", error.message);

            // Server से मिला Response Check करता है।
            if(error.response) { 
                // HTTP Status Code दिखाता है।
                console.log(error.response.status); 
            }
        }
    }
}
