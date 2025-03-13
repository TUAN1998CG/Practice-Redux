import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {addTodo, deleteTodo, toggleTodo} from "../actions/todoActions.js";


export default function TodoList (){
    const dispatch =useDispatch()
    const todos = useSelector((state)=>state.todo)
    const [text, setText] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(text));
        setText('');
    };
    const handleDelete = (id) => {
        dispatch(deleteTodo(id))


    }
    return(
        <>
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
                <button type='submit'>Add</button>
            </form>
            {todos.length ? (
                todos.map((todo) => (
                    <div key={todo.id}>
                        <input
                            onChange={() => dispatch(toggleTodo(todo.id))}
                            type="checkbox"
                            name="todo"
                            id={`todo-${todo.id}`}
                            checked={todo.completed}
                        />
                        {todo.text}
                        <button onClick={()=>handleDelete(todo.id)}>Delete</button>
                    </div>
                ))
            ) : (
                <p>No data.</p>
            )}
        </>
    )
}