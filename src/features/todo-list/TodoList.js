import {useEffect, useState} from 'react';
import TodoService from '../../services/Todo.service';
import style from './TodoList.module.css';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

export default function TodoList() {

    const [todoList, setTodoList] = useState(null);

    useEffect(() => {
        TodoService.get().then(data => setTodoList(data.slice(0,15)));
    }, [])

    return <div className={style.TodoContainer}>
        <div className={style.TodoHeader}>
            <h3>Todo List</h3>
            <Button  size="small" onClick={_ => TodoService.clearCache()} >Clear</Button>
        </div>
        <div className={style.TodoList}>
            {
                todoList ?
                    todoList.map(todo => <div key={todo.id} className={style.TodoItem}>
                        <span className={style.Id}>{todo.id}</span>
                        <span>{todo.title}</span>
                    </div>) : <CircularProgress />
            }
        </div>
    </div>
}