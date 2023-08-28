import React, {useState} from "react";
import { useSelector} from "react-redux";

import {setTasksAction} from "../../store/actions/tasks.ts";
import {tasksSelector} from "../../store/selectors/tasksSelector.ts";
import {useAppDispatch} from "../../store/hooks.ts";

import './TodoForm.scss'

function TodoForm() {
    const dispatch = useAppDispatch();
    const tasks = useSelector(tasksSelector)
    const [value, setValue] = useState('');

    const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!value) return;
        const todo = {
            id: Date.now(),
            name: value,
            complete: false
        }
        console.log(tasks, todo)
        tasks ? dispatch(setTasksAction([...tasks, todo])) : dispatch(setTasksAction([todo]))
        setValue('')
    }
    return (
        <form className='task-form' onSubmit={onSubmitForm}>
            <div className='task-form__wrapper'>
                <input className='task-form__title' onChange={onChangeValue} value={value} type="text" placeholder='Заголовок задачи'/>
                <button className='task-form__create'>Добавить</button>
            </div>
        </form>
    );
}

export default TodoForm;