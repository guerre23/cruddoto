import './App.css';
import { useEffect, useState } from 'react';
import getAllTodos from './componentes/services/getAllTodos';
import TodoItem from './componentes/TodoItem';
import { useForm } from 'react-hook-form';
import postNewUser from './componentes/services/postNewUser';
import editTodo from './componentes/services/editTodo';
import EditUser from './componentes/EditUser'

function App() {
  
  const {register, handleSubmit,} = useForm()
  const [todos, setTodos] = useState([])
  const [newUser, setNewUser] = useState({})
  const [setIdDelete] = useState("")
  const [idEdit, setIdEdit] = useState('')
  const [editObj, setEditObj] = useState({})

  useEffect(() => {
    getAllTodos()
     .then((response) =>{
       console.log(response.data)
       setTodos(response.data.todos)
     })
    postNewUser(newUser)
       .then((response) => {
         setTodos([response.data, ...todos])

       })
  },[newUser,todos])

  useEffect(() => {
    editTodo(idEdit, editObj)
      .then(res => {
        console.log(res)
        setTodos([res.data, ...filterTodo(idEdit)])
      })
  },[idEdit, editObj,filterTodo])

  const onSubmit = (res) => {
    console.log(res)
    setNewUser(res)
  }

  const handleDelete = (id) => {
    setIdDelete(id)
  }

  const handleEdit = (id, obj) => {
    setIdEdit(id)
    setEditObj(obj)
  }

  const filterTodo = (id) => {
    const array = todos.filtertodo((item) => item.id !== id)
    return array
  }



  const list = todos.map((todo) => <TodoItem
  key = {todo.id} todoObj={todo} 
  onDelete = {handleDelete} 
  onEdit = {handleEdit}/>) 



  return (
    <div className="App">
      <header className="App-header">
        <form action='' onSubmit={handleSubmit(onSubmit)}>
          <h3>Nombre</h3> 
          <input placeholder='Fist name' {...register("name")} />
          <h3>Apellido</h3>
          <input placeholder='Last name' {...register("lastname")} />
          <h3>Gmail</h3>
          <input placeholder='Email' {...register("email")} />
          <h3>Password</h3>
          <input placeholder='Password' {...register("password")} />
          <h3>Birthday</h3>
          <input placeholder='Birthday' {...register("birthday")} />
          <br />
          <button onClick={() => this.data(register)} >Enviar</button>
          <EditUser />
        </form>
        {list}
      </header>
    </div>
  );
}

export default App;