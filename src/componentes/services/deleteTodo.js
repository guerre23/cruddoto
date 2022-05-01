import axios from "axios"

const deleteTodo = async (id) =>{
    const URL ='https://todos-go.herokuapp.com/api/todos/${id}'
    const req = await axios.delete(URL)
    return req 
}
export default deleteTodo