
//  Fetch Request in TypeScript

interface Todo {
    userID: number;
    id: number;
    title: string;
    completed: boolean
}

const fetchData = async () => {
    try {
        const response = await axios fetch("https://jsonplaceholder.typicode.com/todos/1");
        console.log("Todo", response);
    } catch (error: any) {
        if(axios.isAxiosError(error)) {
            console.log("Axios Error", error.message);

            if(error.response) {
                console.log(error.response.status);
            }
        }
    }
}