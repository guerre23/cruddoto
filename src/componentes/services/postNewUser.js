import axios from "axios"

const postNewUser = async (newUser) => {
    const req = await axios.get(URL, newUser)
    //get -> obtener informacion del servidor
    //post -> crear un nuevo recurso en el servidor
    //put -> actualizar un recurso existente en el servidor
    //delete -> eliminar un recurso existente en el servidor
    return req
}

export default postNewUser