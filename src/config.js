import axios from 'axios';

export const GetTodos = async () => {
    return await axios.get('https://jsonplaceholder.typicode.com/todos')
}

export const UpdateTodos = async (id, payLoad) => {
    return await axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, payLoad)
}