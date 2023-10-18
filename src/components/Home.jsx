import { BsFillCheckCircleFill, BsCircleFill, BsFillTrashFill } from "react-icons/bs";
import { useState, useEffect } from "react"
import { v4 as uuidv4 } from 'uuid';
import '../components/Home.css'

function Home() {
  const [todos, setTodos] = useState(localStorage.todos ? JSON.parse(localStorage.todos) : [])
  const [task, setTask] = useState()

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos]
  )
  const handleAdd = () => {
    const obj = {
      id: uuidv4(),
      name: task,
      done: false
    }
    setTodos([obj, ...todos]);
  }

  const handleEdit = async (id) => {
    (todos.map((todo) => {
      if (todo.id === id) {
        if (todo.done === true) {
          todo.done = false;
        }
        else {
          todo.done = true;
        }
      }
      return (0)
    }))
    setTodos([...todos]);
  }
  async function handleDelete(id) {
    // let promise = new Promise(function (resolve, reject) {
    //   resolve(setTodos(todos.filter((todo) => todo.id !== id)));
    // });
    // return promise;
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className="container">
      <div className="home">
        <h1>Todo List</h1>
        <div id="quote">Let's Plan Your Day</div>
        <div className="create_form">
          <input type="text" name="" id="input" onChange={(e) => setTask(e.target.value)} placeholder="Add Task" />
          <button type="submit" onClick={handleAdd}>Add</button>
        </div>
        <br />
        {
          todos.length === 0 ? <div id="record"><h2>No Records</h2></div> :
            todos.map((todo) => (
              // eslint-disable-next-line react/jsx-key
              <div className="task" key={todo.id}>
                <div className="checkbox" onClick={() => { handleEdit(todo.id) }}>
                  {todo.done ?
                    <BsFillCheckCircleFill className="icon"></BsFillCheckCircleFill>
                    :
                    <BsCircleFill className='icon' />
                  }
                  <p className={todo.done ? "line_through" : ""} id="task">{todo.name}</p>
                </div>
                <div>
                  <span><BsFillTrashFill className='icon' onClick={() => { handleDelete(todo.id) }} /></span>
                </div>
              </div>
            ))
        }
      </div>
    </div>
  )
}

export default Home