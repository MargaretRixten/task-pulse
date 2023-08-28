import './todoTask.scss'
import {ITask} from "../../interfaces/tasks";
import {useAppDispatch} from "../../store/hooks.ts";
import {useSelector} from "react-redux";
import {tasksSelector} from "../../store/selectors/tasksSelector.ts";
import {setTasksAction} from "../../store/actions/tasks.ts";
import {useRef, useState} from "react";
import TaskControl from "../todoList/taskControl/taskControl.tsx";
import Checkbox from "../checbox/Checkbox.tsx";


function TodoTask(task: ITask) {
    const tasks = useSelector(tasksSelector)
    const dispatch = useAppDispatch()
    const { id, name, complete} = task
    const [value, setValue] = useState(name);
    const [notEditable, setNotEditable] = useState(true);


    const taskFieldRef = useRef(null);

    const onChangeChecked = () => {
        // setCompleted(completed => !completed)
        const newTasksList = tasks?.map(task => {
            if(task.id === id) {
                return {
                    ...task,
                    complete: !task.complete
                }
            }
            return task
        })
        dispatch(setTasksAction(newTasksList || null))
    }

    const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const onEditTask = () => {
        setNotEditable(notEditable => !notEditable)
    }

    const acceptChangesForTask = () => {
        const newTasksList = tasks?.map(task => {
            if(task.id === id) {
                return {
                    ...task,
                    name: value
                }
            }
            return task
        })
        dispatch(setTasksAction(newTasksList || null))
        onEditTask();
    }
    const cancelChangesForTask = () => {
        setValue(name)
        onEditTask();
    }

    const onDeleteTask = () => {
        const newTasksList = tasks?.filter(task => task.id !== id)
        dispatch(setTasksAction(newTasksList || null))
    }

    return (
        <li className='task'>
            <div className='task__complete-wrap'>
                {/*<input onChange={onChangeChecked} className='task__check' type="checkbox"/>*/}
                <Checkbox checked={complete} onChangeChecked={onChangeChecked} />
                <input ref={taskFieldRef} onChange={onChangeValue} disabled={notEditable} className={`task__text ${complete ? 'task__text_completed' : ''}`} type="text" value={value}/>
            </div>
            <TaskControl completed={complete} cancelChangesForTask={cancelChangesForTask} onDeleteTask={onDeleteTask} onEditTask={onEditTask} notEditable={notEditable} acceptChangesForTask={acceptChangesForTask}/>
        </li>
    );
}

export default TodoTask;