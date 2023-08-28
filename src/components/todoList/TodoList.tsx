import './todoList.scss';
import TodoTask from "../todoTask/TodoTask.tsx";
import {ITask} from "../../interfaces/tasks";

interface IProps {
    tasks: ITask[] | null
}

function TodoList({tasks}: IProps) {
    return (
        <ul className="todolist">
            {
                tasks?.map(task => <TodoTask key={task.id} {...task} />)
            }
        </ul>
    );
}

export default TodoList;