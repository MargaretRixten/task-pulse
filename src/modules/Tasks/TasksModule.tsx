import Filters from "../../components/filtres/Filtres.tsx";
import TodoForm from "../../components/todoForm/TodoForm.tsx";
import TodoList from "../../components/todoList/TodoList.tsx";
import {useSelector} from "react-redux";
import {filtersSelector, tasksSelector} from "../../store/selectors/tasksSelector.ts";
import {useEffect, useState} from "react";
import {useAppDispatch} from "../../store/hooks.ts";
import {setTasksAction} from "../../store/actions/tasks.ts";
import {EFilters} from "../../enums/tasks.enum.ts";

function TasksModule() {
    const dispatch = useAppDispatch();
    const tasks = useSelector(tasksSelector);
    const filters = useSelector(filtersSelector);
    const [tasksSorted, setTasksSorted] = useState(tasks);
    useEffect(() => {
        if(!localStorage.getItem('tasks')) return;
        dispatch(setTasksAction(JSON.parse(localStorage.getItem('tasks') || '')));
    }, [])
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks!));
    }, [tasks]);

    useEffect(() => {
        if(!tasks) return;
        switch (filters) {
            case EFilters.Active:
                setTasksSorted(tasks.filter(task => !task.complete))
                break;
            case EFilters.Completed:
                setTasksSorted(tasks.filter(task => task.complete))
                break;
            default:
                setTasksSorted(tasks)
                break;
        }
    }, [filters, tasks]);


    return (
        <>
            <h1>My Todo List</h1>
            <Filters/>
            <TodoForm/>
            <TodoList tasks={tasksSorted}/>
            {
                tasksSorted?.length ? '' : <div>Список пока пуст</div>
            }
        </>
    );
}

export default TasksModule;